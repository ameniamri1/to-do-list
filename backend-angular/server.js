require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const connectDB = require("./config/database");
const todoRoutes = require("./routes/todoRoutes");
const notesRoutes = require("./routes/noteRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");
const reminderRoutes = require("./routes/reminderRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(require("cors")());

// Routes
app.use("/api", todoRoutes);
app.use("/api", notesRoutes);
app.use("/api", wishlistRoutes);
app.use("/api", reminderRoutes);
app.use("/api/todos", todoRoutes);

// Connect Database
mongoose
  .connect("mongodb://localhost:27017/monapp", {
    
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
// Routes

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
