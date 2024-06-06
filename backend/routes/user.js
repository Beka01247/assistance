const express = require('express');
const userController = require('../controllers/userController');
const authenticateToken  = require('../middlewares/userAuthMid');

const router = express.Router();

// login
router.post('/login', userController.login);

// natural disasters
router.post('/disaster/add-disaster', userController.addDisaster);
router.get('/disasters', userController.allDisasters);

// study center
router.get('/study-centers', userController.allStudycenters);

// forum
router.post('/add-forum', userController.createForum);
router.get('/forums', userController.allForums);
router.delete('/forum/:forumId', authenticateToken, userController.deleteForum)

// messages
router.post('/forum/:forumId/add-message', userController.addMessage);
router.get('/forum/:forumId', userController.allMessagesByForum);
router.delete('/forum/:forumId/:messageId', authenticateToken, userController.deleteMessage)

module.exports = router;