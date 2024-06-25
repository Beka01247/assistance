const express = require("express");
const userController = require("../controllers/userController");
const forumController = require("../controllers/forumController");
const centerController = require("../controllers/centersController");
const missingController = require("../controllers/missingController");
const upload = require("../config/upload");

const router = express.Router();

// login
router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.post("/change-password", userController.changePassword);
router.post("/upload-avatar", userController.uploadAvatar);

// journal and incidents
router.get("/incidents", userController.getIncidents);
router.post("/create-incident", userController.createIncident);
router.get("/incidents/:id", userController.getIncidentById);
router.post(
  "/incident/:incident_id/create-chat",
  userController.createChatForIncident
);
router.post("/incident/:chat_id/send-message", userController.sendMessage);
router.get("/incident/:chat_id/all-messages", userController.getChatMessages);
router.get(
  "/incidents/:incident_id/all-chats",
  userController.getChatsByIncidentId
);
router.patch(
  "/incidents/:incident_Id/status",
  userController.updateIncidentStatus
);

// forums
router.get("/forums", forumController.allForums);
router.get("/forums/:forum_id", forumController.forumById);
router.post("/forums/add-forum", forumController.createForum);
router.post("/forums/:forumId/add-message", forumController.addMessage);
router.get("/forums/:forumId/messages", forumController.allMessagesByForum);

// study center
router.get("/study-centers", centerController.getAllCenters);
router.get("/study-centers/:id", centerController.getCenterById);
router.post("/study-centers/add-center", centerController.addCenter);

// natural disasters
router.post("/disasters/add-disaster", userController.addNaturalDisaster);
router.get("/disasters", userController.getAllNaturalDisasters);
router.get("/disasters/:natDisId", userController.getNaturalDisasterById);
router.post("/disasters/:natDisId/add-message", userController.addMessage);
router.get(
  "/disasters/:natDisId/messages",
  userController.getAllMessagesByNatDis
);

// missing
router.post("/missing/add", missingController.addMissing);
router.get("/missing", missingController.getAllMissing);
router.get("/missing/:missingId", missingController.getMissingById);
router.post(
  "/missing/:missingId/messages/add",
  missingController.addMissingMessage
);
router.get(
  "/missing/:missingId/messages",
  missingController.getAllMessagesByMissingId
);

// certificate
router.post(
  "/certificate/add",
  upload.single("certificate"),
  userController.uploadCertificate
);
router.get("/:user_id/certificate", userController.getCertificate);

module.exports = router;
