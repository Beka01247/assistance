const db = require("../config/db");
const jwt = require("jsonwebtoken");

exports.addMissing = async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const userId = decoded.userId;

  const {
    type,
    full_name,
    description,
    photo1,
    photo2,
    photo3,
    info_price,
    find_price,
  } = req.body;

  if (!type || !full_name || !description) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const result = await db.query(
      `INSERT INTO Missing (type, full_name, description, photo1, photo2, photo3, info_price, find_price, user_id, created_at) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
      [
        type,
        full_name,
        description,
        photo1,
        photo2,
        photo3,
        info_price,
        find_price,
        userId,
      ]
    );
    res
      .status(201)
      .json({ message: "Missing entity added", missingId: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
};

exports.getAllMissing = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        m.*, 
        u.name AS creator_name,
        u.surname AS creator_surname
      FROM 
        Missing m
        JOIN Users u ON m.user_id = u.user_id
    `);
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
};

exports.getMissingById = async (req, res) => {
  const missingId = req.params.missingId;

  try {
    const [rows] = await db.query(
      `
      SELECT 
        m.*, 
        u.name AS creator_name,
        u.surname AS creator_surname
      FROM 
        Missing m
        JOIN Users u ON m.user_id = u.user_id
      WHERE 
        m.missing_id = ?
    `,
      [missingId]
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: "Missing entity not found" });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
};

exports.addMissingMessage = async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const userId = decoded.userId;

  const missingId = req.params.missingId;
  const { content } = req.body;

  if (!content || !missingId) {
    return res
      .status(400)
      .json({ message: "Content and missing ID are required" });
  }

  try {
    const result = await db.query(
      "INSERT INTO MissingMessages (content, missing_id, user_id, created_at) VALUES (?, ?, ?, NOW())",
      [content, missingId, userId]
    );
    const [newMessage] = await db.query(
      "SELECT * FROM MissingMessages WHERE message_id = ?",
      [result.insertId]
    );
    res.status(201).json({ message: "Message added" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
};

exports.getAllMessagesByMissingId = async (req, res) => {
  const missingId = req.params.missingId;

  try {
    const [rows] = await db.query(
      `
      SELECT 
        mm.*,
        u.name AS message_user_name,
        u.surname AS message_user_surname,
        u.type AS message_user_type
      FROM 
        MissingMessages mm
        JOIN Users u ON mm.user_id = u.user_id
      WHERE 
        mm.missing_id = ?
      `,
      [missingId]
    );

    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
};
