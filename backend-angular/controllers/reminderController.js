const Reminder = require('../models/reminder');

// Ajouter un rappel
exports.createReminder = async (req, res) => {
  try {
    const { message, date } = req.body;
    const newReminder = new Reminder({
      message,
      date,
    });
    const savedReminder = await newReminder.save();
    res.status(201).json(savedReminder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer tous les rappels
exports.getAllReminders = async (req, res) => {
  try {
    const reminders = await Reminder.find();
    res.status(200).json(reminders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un rappel par son ID
exports.deleteReminder = async (req, res) => {
  try {
    const { id } = req.params;
    await Reminder.findByIdAndDelete(id);
    res.status(200).json({ message: 'Reminder deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
