const { User } = require("../models");
const bcrypt = require("bcryptjs");

const loginRoute = function(req, res, next){
    try {
        res.send("Login route works");
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong. Please try again",
        });
    }
}

const logoutRoute = function(req, res, next){
    try {
        res.send("Logout route works");
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
        if (foundUser){ throw "userFound"};

        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt);
        const newUser = await User.create({ 
            ...req.body, 
            password: hashPass,
        });

        return res.status(201).json({
            message: "User Created!",
            user: newUser,
        });
        // ADD LOGIN LATER
    } catch (error) {
        console.log(error);
        if (error = "userFound") {
            return res.status(400).json({
                message: "An account with this email address already exists. Please log in instead.",
            });
        }
        return res.status(500).json({
            message: "Something went wrong. Please try again",
        });
    }
}

module.exports = {
    loginRoute,
    signupRoute,
    logoutRoute,
}