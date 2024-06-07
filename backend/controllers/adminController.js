const express = require('express');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.adminLogin = async (req, res) => {
  try {
    const { login, password } = req.body;
    if (login === 'admin' && password === 'root') {
      const token = jwt.sign({ userId: 1, role: 'admin' }, process.env.JWT_SECRET, {
        expiresIn: '1h'
      });
      res.json({ token });
    } else {
      res.status(401).json({message: 'Admin authorization failed'});
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}


exports.allUsers = async (req, res) => {
  try {
    const [users, _] = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(200).json({error: error.message});
  }

}