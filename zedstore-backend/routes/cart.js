const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} = require("../controllers/verifyTokenController");
const {addNewCart,updateCart,deleteUserCart,userCart,allCarts} = require('../controllers/cartController')

// CREATE
router.post("/", verifyToken, addNewCart);

// Update Cart
router.put("/:id", verifyTokenAndAuth, updateCart);

// Delete User Cart
router.delete("/:id", verifyTokenAndAuth, deleteUserCart);

// Get User Cart
router.get("/find/:userId", verifyTokenAndAuth, userCart);

// Get All Carts For Admin Stats
router.get("/", verifyTokenAndAdmin, allCarts);

module.exports = router;
