const router = require("express").Router();
const { verifyTokenAndAuth, verifyTokenAndAdmin } = require("../controllers/verifyTokenController");
const {createProduct,updateProduct,deleteProduct,getProduct,getFilteredProducts} = require('../controllers/productController');

//Create Product
router.post("/", verifyTokenAndAdmin, createProduct);

//Update Product
router.put("/:id", verifyTokenAndAdmin, updateProduct);

//Delete Product
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

//Get Product
router.get("/find/:id", getProduct);

//Filtered Products
router.get("/",getFilteredProducts);

module.exports = router;
