const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();
const verifyToken = require("../middlewares/adminMid");

router.post("/login", adminController.adminLogin);

router.get("/users", verifyToken, adminController.allUsers);
router.get("/users/:id", verifyToken);
router.put("/users/user:id/block");

// user control
router.get("/users/user:id/activity/messages-forum");
router.get("/users/user:id/activity/forums");
router.get("/users/user:id/activity/announcements");
router.get("/users/user:id/activity/messages-disasters");
router.get("/users/user:id/activity/incidents");
router.get("/users/user:id/activity/incident-responses");

// content control
router.get("/content/topics");
router.get("/content/topics/;id");
router.get("/content/messages");
router.get("/content/banned-words");
router.post("/content/banned-words");
router.get("/content/certificates");
router.get("/content/certificates/user:id");

// notification
router.post("/notification");

// natural disasters
router.get("/disasters");
router.get("/disasters/disaster:id");
router.put("disasters/disaster:id");

// chat
router.get("/chats");
router.post("/chats");

// password change
router.post("/change-password");

module.exports = router;
