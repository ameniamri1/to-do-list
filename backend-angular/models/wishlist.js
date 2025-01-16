const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema({
  item: {
    type: String,
    required: [true, "Item name is required"],
    trim: true, // Assure-toi que les espaces superflus sont supprimés
  },
  description: {
    type: String,
    trim: true, // Enlever les espaces superflus
    default: "No description provided", // Valeur par défaut si aucune description n'est donnée
  },
  addedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Wishlist", WishlistSchema);
