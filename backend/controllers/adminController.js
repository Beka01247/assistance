const express = require('express');
const User = require('../models/userModel')

exports.adminLogin = async (req, res) => {
  try {
    const { login, password } = req.body;
    if (login === 'admin' && password === 'root') {
      res.status(400).json({message: 'Admin authorized'});
    } else {
      res.status(400).json({message: 'Admin authorization failed'});
    }
  } catch (error) {
    res.status(200).json({error: error.message})
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