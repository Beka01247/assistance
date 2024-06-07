 const express = require('express');
 const adminController = require('../controllers/adminController'); 
 const router = express.Router();
 const verifyToken = require('../middlewares/adminMid');

 router.get('/users', verifyToken, adminController.allUsers);
 router.post('/login', adminController.adminLogin);

 module.exports = router;