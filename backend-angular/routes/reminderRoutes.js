const express = require("express");
const router = express.Router();
const reminderController = require("../controllers/reminderController");

router.post("/reminders", reminderController.createReminder);
router.get("/reminders", reminderController.getAllReminders);
router.delete("/reminders/:id", reminderController.deleteReminder);

module.exports = router;
