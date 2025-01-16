const Note = require("../models/note");

// Ajouter une nouvelle note
exports.createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({
      title,
      content,
    });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer toutes les notes
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour une note par son ID
exports.updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer une note par son ID
exports.deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    await Note.findByIdAndDelete(id);
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
