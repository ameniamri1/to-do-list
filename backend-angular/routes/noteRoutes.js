const express = require("express");
const router = express.Router();
const notesController = require("../controllers/noteController");

// Route pour récupérer toutes les notes
router.get("/notes", notesController.getAllNotes); // Récupère toutes les notes

// Route pour créer une nouvelle note
router.post("/notes", notesController.createNote); // Crée une nouvelle note

// Route pour mettre à jour une note par son ID
router.put("/notes/:id", notesController.updateNote); // Met à jour une note en fonction de son ID

// Route pour supprimer une note par son ID
router.delete("/notes/:id", notesController.deleteNote); // Supprime une note en fonction de son ID

module.exports = router;
