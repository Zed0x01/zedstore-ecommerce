const User = require("../models/User");
const CryptoJS = require("crypto-js");
const JWT = require("jsonwebtoken");

// Make new User
const newUser =async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.ENCRYPT_SEC),
        email: req.body.email,
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Login Authentication
const loginUser =async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("Enter username and password.");
        const hashPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.ENCRYPT_SEC
        ).toString(CryptoJS.enc.Utf8);
        if (hashPassword !== req.body.password)
            return res.status(401).json("Wrong Creds");
        const accessToken = JWT.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.ACCESS_TOKEN,
            {
                expiresIn: "3d",
            }
        );
        res.status(200).json({ ...user._doc, accessToken });
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {loginUser,newUser};