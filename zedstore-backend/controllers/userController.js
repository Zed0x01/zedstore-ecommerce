const CryptJS = require("crypto-js");
const User = require("../models/User");

const updateUser = async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptJS.AES.encrypt(
            req.body.password,
            process.env.ENCRYPT_SEC
        ).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getAllUsers = async (req, res) => {
    const query = req.query.new;
    try {
        const users = query
            ? await User.find().sort({ _id: -1 }).limit(5)
            : await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getUserStats = async (req, res) => {
    const date = new Date();
    const lastyear = new Date(date.setFullYear(date.setFullYear() - 1));
    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastyear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has deleted");
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {updateUser,getUser,getAllUsers,getUserStats,deleteUser}