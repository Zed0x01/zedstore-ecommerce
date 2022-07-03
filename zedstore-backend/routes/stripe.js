const router = require("express").Router();
const makePayment = require("../controllers/stripeController");

// Make a Payment
router.post("/payment", makePayment);

module.exports = router;
