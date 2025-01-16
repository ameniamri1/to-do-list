const Todo = require("../models/todo");

// Ajouter une nouvelle tâche
exports.createTodo = async (req, res) => {
  try {
    const { task, description, completed } = req.body; // Assurez-vous d'utiliser 'task'
    const newTodo = new Todo({
      task, // Utilisation de 'task' au lieu de 'title'
      description,
      completed: completed !== undefined ? completed : false, // Si 'completed' n'est pas fourni, utilise false par défaut
    });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer toutes les tâches
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour une tâche par son ID
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description, completed },
      { new: true }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer une tâche par son ID
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
