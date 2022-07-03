const Order = require("../models/Order");

// Create Order for User
const createOrder = async (req, res) => {
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
};

//Update User Order
const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.body.id,
            {
                $set: req.body,
            },
            {
                new: true,
            }
        );
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
};

//Delete User Order
const deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted");
    } catch (err) {
        res.status(500).json(err);
    }
}

// Get User Order
const userOrder = async (req, res) => {
    try {
        const orderList = await Order.find({ userId: req.params.userId });
        res.status(200).json(orderList);
    } catch (err) {
        res.status(500).json(err);
    }
};

// get All Orders
const allOrder = async (req, res) => {
    try {
        const Orders = await Order.find();
        res.status(200).json(Orders);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get Monthly Income
const monthlyIncome = async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            { $project: { month: { $month: "$createdAt" }, sales: "$amount" } },
            { $group: { _id: "$month", total: { $sum: "$sales" } } },
        ]);
        res.status(200).json(income);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports ={createOrder,updateOrder,deleteOrder,userOrder,allOrder,monthlyIncome}