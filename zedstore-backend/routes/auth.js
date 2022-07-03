const router = require("express").Router();
const {loginUser,newUser} = require('../controllers/authController');

//REGISTER
router.post("/register", newUser);
//Login
router.post("/login", loginUser);

module.exports = router;
