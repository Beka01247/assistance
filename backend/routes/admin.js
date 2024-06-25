const express = require("express");
const adminController = require("../controllers/adminController");
const forumController = require("../controllers/forumController");
const userController = require("../controllers/userController");
const router = express.Router();
const verifyAdmin = require("../middlewares/adminMid");

// account
router.post("/login", adminController.adminLogin);
router.post("/change-info", verifyAdmin, adminController.changeAdminDetails);

// users control
router.get("/users", verifyAdmin, adminController.getAllUsers);
router.get("/users/:userId", verifyAdmin, adminController.getUserById);
router.get(
  "/users/:userId/forumMessages",
  verifyAdmin,
  adminController.getMessagesByUser
);
router.get(
  "/users/:userId/forums",
  verifyAdmin,
  adminController.getForumsByUser
);
router.get(
  "/users/:userId/incidents",
  verifyAdmin,
  adminController.getIncidentsByUser
);
router.get(
  "/users/:userId/natdis",
  verifyAdmin,
  adminController.getNaturalDisastersByUser
);
router.post("/centers/add", verifyAdmin, adminController.addCenter);
router.post("/users/:userId/ban", verifyAdmin, adminController.banUser);

// content control

router.get("/forums", forumController.allForums);
router.get("/forums/:forum_id", forumController.forumById);
router.get("/forums/:forumId/messages", forumController.allMessagesByForum);
router.get("/messages", verifyAdmin, adminController.getAllMessages);

// natural disasters

router.post("/disasters/add-disaster", userController.addNaturalDisaster);
router.get("/disasters", userController.getAllNaturalDisasters);
router.get("/disasters/:natDisId", userController.getNaturalDisasterById);
router.get(
  "/disasters/:natDisId/messages",
  userController.getAllMessagesByNatDis
);

// support chat

router.post("/chats", verifyAdmin, adminController.createChat);
router.post(
  "/chats/:chatId/messages",
  verifyAdmin,
  adminController.sendMessage
);
router.get(
  "/chats/:chatId/messages",
  verifyAdmin,
  adminController.getChatMessages
);

module.exports = router;
