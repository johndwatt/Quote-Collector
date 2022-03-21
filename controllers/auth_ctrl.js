const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginRoute = async function(req, res, next){
    try {
        const foundUser = await User.findOne({ email: req.body.email }).select("+password");
        if (!foundUser) { 
            return res.status(400).json({
                message: "Email or password is incorrect. Please try again",
            });
        };
        const match = await bcrypt.compare(req.body.password, foundUser.password);
        if (match) {
            const token = jwt.sign({ _id: foundUser._id }, process.env.SECRET_KEY, { expiresIn: "1d" });
            return res.status(200).json({
                message: "Successful Login!",
                token,
            });
        } else {
            return res.status(400).json({
                message: "Email or password is incorrect. Please try again",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong. Please try again",
        });
    }
}

const signupRoute = async function(req, res, next){
    try {
        const foundUser = await User.findOne({ email: req.body.email });
        if (foundUser) {             
            return res.status(400).json({
                message: "An account with this email address already exists. Please log in instead.",
            });
        };

        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt);
        const newUser = await User.create({ 
            ...req.body, 
            password: hashPass,
        });
        const token = jwt.sign({ _id: newUser._id }, process.env.SECRET_KEY, { expiresIn: "1d" });
        return res.status(201).json({
            message: "User Created!",
            user: newUser,
            token,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong. Please try again",
        });
    }
}

module.exports = {
    loginRoute,
    signupRoute,
}