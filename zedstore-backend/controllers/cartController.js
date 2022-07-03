const Cart = require("../models/Cart");

//Create new Cart
const addNewCart = async (req, res) => {
    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err);
    }
}

//Update User Cart
const updateCart = async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.body.id,
            {
                $set: req.body,
            },
            {
                new: true,
            }
        );
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Delete User Cart by userId
const deleteUserCart = async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted");
    } catch (err) {
        res.status(500).json(err);
    }
};

//get User Cart
const userCart = async (req, res) => {
    try {
        const CartId = await Cart.findOne({ userId: req.params.userId });
        res.status(200).json(CartId);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get All carts for Admin

const allCarts = async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {addNewCart,updateCart,deleteUserCart,userCart,allCarts}