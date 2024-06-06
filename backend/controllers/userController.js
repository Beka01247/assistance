require('dotenv').config();
const express = require('express');
const User = require('../models/userModel');
const NaturalDisaster = require('../models/natDisModel');
const StudyCenter = require('../models/studyCenterModel');
const Forum = require('../models/forumModel');
const Message = require('../models/messageModel');
const jwt = require('jsonwebtoken')

// auth

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
      return res.status(400).json({ error: "Email and password cannot be empty" });
  }

  try {
      const user = await User.findByEmail(email);
      if (!user) {
          return res.status(401).json({ error: "User not found" });
      }

      if (user.password !== password) {
          return res.status(401).json({ error: "Incorrect password" });
      }

      // Define JWT payload
      const payload = {
          user_id: user.id,
          email: user.email
      };

      // Sign the JWT
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

      // Respond with the JWT
      res.status(200).json({ token });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};


// natural disasters 

exports.addDisaster = async (req, res) => {
  try {
    const {name, description, date_occurred} = req.body;
    const natdis = new NaturalDisaster(name, description, date_occurred);
    const savedDisaster = await natdis.save();
    res.status(200).json({ disaster: natdis  });
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

exports.allDisasters = async (req, res) => {
  try {
    const [natdisasters, _] = await NaturalDisaster.findAll();
    res.status(200).json(natdisasters);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// study centers

exports.allStudycenters = async (req, res) => {
  try {
    const [studyCenters, _] = await StudyCenter.findAll();
    res.status(200).json(studyCenters);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

// forum

exports.createForum = async (req, res) => {
  try {
    const { user_id, title, description } = req.body;
    const forum = new Forum(user_id, title, description);
    const newForum = await forum.save();
    res.status(200).json(forum);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.allForums = async (req, res) => {
  try {
    const [forums, _] = await Forum.findAll();
    res.status(200).json(forums);
  } catch (error) {
  res.status(400).json({ error: error.message });
  }
};

exports.deleteForum = async (req, res) => {
  try {
    const id = req.params.forumId;
    const userId = req.user.user_id;
    const forum = await Forum.findById(id);
    if (!forum || forum.length === 0) {
      return res.status(400).json({ error: "Forum not found" });
    }

    const forumDetails = forum[0];

    if (forumDetails.user_id !== userId) {
      return res.status(400).json({ error: "You do not have permission to delete this forum" });
    }

    await Message.deleteByForumId(id); 

    const deleted = await Forum.deleteById(id);
    if (!deleted) {
      return res.status(400).json({ error: "Failed to delete forum" });
    }
    res.status(200).json({ message: "Forum deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



// messages

exports.addMessage = async (req, res) => {
  try {
    const forum_id = req.params.forumId;
    const { user_id, content } = req.body;
    const message = new Message(forum_id, user_id, content);
    const newMessage = await message.save();
    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.allMessagesByForum = async (req, res) => {
  try {
      const messages = await Message.findByForumId(req.params.forumId);
      res.status(200).json(messages);
  } catch (error) {
      res.status(500).send(error.message);
  }
};

exports.deleteMessage = async (req, res) => {
  try {
      const { forumId, messageId } = req.params;
      const userId = req.user.user_id;
      const message = await Message.findById(messageId);

      if (!message) {
          return res.status(404).json({ error: "Message not found" });
      }

      if (message.forum_id !== parseInt(forumId)) {
          return res.status(400).json({ error: "Message does not belong to the specified forum" });
      }

      if (message.user_id !== userId) {
          return res.status(403).json({ error: "You do not have permission to delete this message" });
      }

      const deleted = await Message.deleteById(messageId);
      if (!deleted) {
          return res.status(500).json({ error: "Failed to delete message" });
      }

      res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

