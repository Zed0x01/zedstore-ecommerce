const router = require("express").Router();
const { verifyTokenAndAuth, verifyTokenAndAdmin } = require("../controllers/verifyTokenController");
const {updateUser,getUser,getAllUsers,getUserStats,deleteUser} = require('../controllers/userController');

//Update User
router.put("/:id", verifyTokenAndAuth, updateUser);

//Get User
router.get("/find/:id", verifyTokenAndAdmin, getUser);

//Get all users
router.get("/", verifyTokenAndAdmin, getAllUsers);

//Get user Stats
router.get("/stats", verifyTokenAndAdmin, getUserStats);

//Delete User
router.delete("/:id", verifyTokenAndAuth, deleteUser);

module.exports = router;
