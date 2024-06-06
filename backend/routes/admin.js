 const express = require('express');
 const adminController = require('../controllers/adminController'); 
 const router = express.Router();

 // router.post('/add-user');
 router.get('/users', adminController.allUsers);
 router.post('/login', adminController.adminLogin);

 module.exports = router;