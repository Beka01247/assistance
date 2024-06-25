require("dotenv").config();
const express = require("express");
const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const upload = require("../config/upload");

// auth

exports.login = async (req, res) => {
  const { phone, password } = req.body;

  if (!phone || !password) {
    return res
      .status(400)
      .json({ error: "Phone and password cannot be empty" });
  }

  try {
    const [rows] = await db.execute("SELECT * FROM Users WHERE phone = ?", [
      phone,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user.user_id }, process.env.JWT_SECRET, {
      expiresIn: "5h",
    });

    res.status(200).json({
      token,
      user: {
        user_id: user.user_id,
        Type: user.Type,
        Name: user.Name,
        Surname: user.Surname,
        Phone: user.Phone,
        Email: user.Email,
        created_at: user.created_at,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.signup = async (req, res) => {
  const { type, name, surname, phone, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await db.execute(
      "INSERT INTO Users (type, name, surname, phone, email, password) VALUES (?, ?, ?, ?, ?, ?)",
      [type, name, surname, phone, email, hashedPassword]
    );

    res.status(201).json({ userId: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const token = req.headers.authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    const [rows] = await db.execute("SELECT * FROM Users WHERE user_id = ?", [
      userId,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = rows[0];
    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid old password" });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    await db.execute("UPDATE Users SET password = ? WHERE user_id = ?", [
      hashedNewPassword,
      userId,
    ]);

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createIncident = async (req, res) => {
  const { type, latitude, longitude, location, description } = req.body;
  const token = req.headers.authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    const [result] = await db.execute(
      "INSERT INTO Incidents (type, latitude, longitude, location, description, user_id, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())",
      [type, latitude, longitude, location, description, userId]
    );

    res.status(201).json({ incidentId: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getIncidents = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM Incidents");

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getIncidentById = async (req, res) => {
  const incidentId = req.params.id;

  try {
    const [rows] = await db.execute(
      `
            SELECT 
                i.incident_id, 
                i.type, 
                i.latitude, 
                i.longitude, 
                i.location, 
                i.description, 
                i.user_id, 
                i.isActive, 
                i.created_at, 
                u.Name AS user_name, 
                u.Surname AS user_surname 
            FROM Incidents i
            JOIN Users u ON i.user_id = u.user_id
            WHERE i.incident_id = ?
        `,
      [incidentId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Incident not found" });
    }

    const incident = rows[0];
    const incidentData = {
      incident_id: incident.incident_id,
      type: incident.type,
      latitude: incident.latitude,
      longitude: incident.longitude,
      location: incident.location,
      description: incident.description,
      user_id: incident.user_id,
      isActive: incident.isActive,
      created_at: incident.created_at,
      user_name: `${incident.user_name} ${incident.user_surname}`,
    };

    res.status(200).json(incidentData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createChatForIncident = async (req, res) => {
  const incidentId = req.params.incident_id;

  if (!incidentId) {
    return res.status(400).json({ message: "incident_id is required" });
  }

  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;
    const [result] = await db.execute(
      "INSERT INTO Chats (user_id, incident_id, created_at) VALUES (?, ?, NOW())",
      [userId, incidentId]
    );

    res.status(201).json({
      message: "Chat created and incident updated successfully",
      chat_id: chatId,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.sendMessage = async (req, res) => {
  const chat_id = req.params.chat_id;
  const { message } = req.body;

  if (!chat_id || !message) {
    return res
      .status(400)
      .json({ message: "chat_id and message are required" });
  }

  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;
    let senderId, recipientId;

    const [chatInfo] = await db.execute(
      "SELECT user_id, recipient_id FROM Chats WHERE chat_id = ?",
      [chat_id]
    );

    if (chatInfo.length === 0) {
      return res.status(404).json({ message: "Chat not found" });
    }

    const { user_id, recipient_id } = chatInfo[0];

    if (userId === user_id) {
      senderId = userId;
      recipientId = recipient_id;
    } else {
      senderId = userId;
      recipientId = user_id;

      if (!recipient_id) {
        await db.execute(
          "UPDATE Chats SET recipient_id = ? WHERE chat_id = ?",
          [userId, chat_id]
        );
      }
    }

    await db.execute(
      "INSERT INTO Messages (chat_id, sender_id, message, sent_at) VALUES (?, ?, ?, NOW())",
      [chat_id, userId, message]
    );

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getChatMessages = async (req, res) => {
  const chatId = req.params.chat_id;

  try {
    const [rows] = await db.execute(
      `SELECT m.message_id, m.chat_id, m.sender_id, u.Name AS sender_name, u.Surname AS sender_surname, m.message, m.sent_at
           FROM Messages m
           JOIN Users u ON m.sender_id = u.user_id
           WHERE m.chat_id = ?`,
      [chatId]
    );

    if (rows.length === 0) {
      return res
        .status(404)
        .json({ message: "No messages found for this chat" });
    }

    const messages = rows.map((row) => ({
      message_id: row.message_id,
      chat_id: row.chat_id,
      sender_id: row.sender_id,
      sender_name: `${row.sender_name} ${row.sender_surname}`,
      message: row.message,
      sent_at: row.sent_at,
    }));

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getChatsByIncidentId = async (req, res) => {
  const incidentId = req.params.incident_id;

  try {
    const [rows] = await db.execute(
      `SELECT c.chat_id, c.user_id, u.Name AS user_name, u.Surname AS user_surname, c.recipient_id, c.created_at
       FROM Chats c
       JOIN Users u ON c.user_id = u.user_id
       WHERE c.incident_id = ?`,
      [incidentId]
    );

    if (rows.length === 0) {
      return res
        .status(404)
        .json({ message: "No chats found for this incident" });
    }

    const chats = rows.map((row) => ({
      chat_id: row.chat_id,
      user_id: row.user_id,
      user_name: `${row.user_name} ${row.user_surname}`,
      recipient_id: row.recipient_id,
      created_at: row.created_at,
    }));

    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// natural disasters
exports.addNaturalDisaster = async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const userId = decoded.userId;

  const { title, description, type, photo } = req.body;

  if (!title || !description || !type) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const result = await db.query(
      `INSERT INTO NaturalDisasters (title, description, type, photo, user_id, created_at) 
      VALUES (?, ?, ?, ?, ?, NOW())`,
      [title, description, type, photo, userId]
    );
    res
      .status(201)
      .json({ message: "Natural disaster added", natDisId: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
};

exports.getAllNaturalDisasters = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM NaturalDisasters");
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
};

exports.getNaturalDisasterById = async (req, res) => {
  const natDisId = req.params.natDisId;

  try {
    const [rows] = await db.query(
      `
      SELECT 
        nd.*,
        u.name AS creator_name,
        u.surname AS creator_surname,
        u.type AS creator_type
      FROM 
        NaturalDisasters nd
        JOIN Users u ON nd.user_id = u.user_id
      WHERE 
        nd.nat_dis_id = ?
      `,
      [natDisId]
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: "Natural disaster not found" });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
};

exports.addMessage = async (req, res) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    const natDisId = req.params.natDisId;
    const { content } = req.body;

    if (!content || !natDisId) {
      return res
        .status(400)
        .json({ message: "Content and natDisId are required" });
    }

    const result = await db.query(
      "INSERT INTO nat_dis_messages (content, nat_dis_id, user_id, created_at) VALUES (?, ?, ?, NOW())",
      [content, natDisId, userId]
    );

    res.status(201).json({ message: "Added the message" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
};

exports.getAllMessagesByNatDis = async (req, res) => {
  const natDisId = req.params.natDisId;

  try {
    const [rows] = await db.query(
      `
      SELECT 
        ndm.*,
        u.name AS message_user_name,
        u.surname AS message_user_surname,
        u.type AS message_user_type
      FROM 
        nat_dis_messages ndm
        JOIN Users u ON ndm.user_id = u.user_id
      WHERE 
        ndm.nat_dis_id = ?
      `,
      [natDisId]
    );

    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
};

exports.uploadCertificate = async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const userId = decoded.userId;

  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    const result = await db.query(
      `UPDATE Users SET certificate_pdf = ? WHERE user_id = ?`,
      [req.file.buffer, userId]
    );
    res.status(200).json({ message: "Certificate uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
};

exports.getCertificate = async (req, res) => {
  const userId = req.params.user_id;

  try {
    const [rows] = await db.query(
      `SELECT certificate_pdf FROM Users WHERE user_id = ?`,
      [userId]
    );
    if (rows.length === 0) {
      return res
        .status(404)
        .json({ message: "User not found or no certificate available" });
    }
    res.setHeader("Content-Type", "application/pdf");
    res.send(rows[0].certificate_pdf);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
};

exports.updateIncidentStatus = async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const userId = decoded.userId;

  const incidentId = req.params.incident_Id;

  const { reason } = req.body;

  try {
    const [userRows] = await db.query(
      "SELECT type FROM Users WHERE user_id = ?",
      [userId]
    );
    if (userRows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const userType = userRows[0].type;

    if (userType !== "Спасатель") {
      return res
        .status(403)
        .json({ message: "User is not authorized to update incident status" });
    }

    const [incidentRows] = await db.query(
      "UPDATE Incidents SET isActive = FALSE, reason = ?, status_changed_by = ? WHERE incident_id = ?",
      [reason, userId, incidentId]
    );

    if (incidentRows.affectedRows === 0) {
      return res.status(404).json({ message: "Incident not found" });
    }

    res.status(200).json({ message: "Incident status updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
};
