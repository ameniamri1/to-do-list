const express = require("express");
const router = express.Router();
const wishlistController = require("../controllers/wishlistController");

// Route pour créer un nouvel item dans la wishlist
router.post("/wishlist", wishlistController.createWishlistItem);

// Route pour obtenir tous les items de la wishlist
router.get("/wishlist", wishlistController.getAllWishlistItems);

// Route pour supprimer un item de la wishlist
router.delete("/wishlist/:id", wishlistController.deleteWishlistItem);

module.exports = router;
