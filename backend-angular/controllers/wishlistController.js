const Wishlist = require("../models/wishlist");

// Créer un élément de wishlist
exports.createWishlistItem = async (req, res) => {
  const { item, description } = req.body;

  // Validation des données
  if (!item) {
    return res.status(400).json({ message: "Item is required" });
  }

  try {
    const newWishlistItem = new Wishlist({ item, description });
    await newWishlistItem.save();
    res
      .status(201)
      .json({ message: "Item added to wishlist", data: newWishlistItem });
  } catch (err) {
    res.status(500).json({ message: "Error adding item", error: err.message });
  }
};

// Obtenir tous les éléments de la wishlist
exports.getAllWishlistItems = async (req, res) => {
  try {
    const items = await Wishlist.find();
    res.status(200).json({ data: items });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching wishlist items", error: err.message });
  }
};

// Supprimer un élément de la wishlist
exports.deleteWishlistItem = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Item ID is required" });
  }

  try {
    const item = await Wishlist.findByIdAndDelete(id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted", data: item });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting item", error: err.message });
  }
};
