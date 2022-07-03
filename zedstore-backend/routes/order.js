const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} = require("../controllers/verifyTokenController");
const {createOrder,updateOrder,deleteOrder,userOrder,allOrder,monthlyIncome} = require('../controllers/orderController');

// CREATE
router.post("/", verifyToken, createOrder);

// Update
router.put("/:id", verifyTokenAndAdmin, updateOrder);

// Delete
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);

//get user orders
router.get("/find/:userId", verifyTokenAndAuth, userOrder);

// GET ALL orders
router.get("/", verifyTokenAndAdmin, allOrder);

// Get Monthly Income

router.get("/income", verifyTokenAndAdmin, monthlyIncome);

module.exports = router;
