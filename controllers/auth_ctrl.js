const { User } = require("../models");

const loginRoute = function(req, res, next){
    try {
        res.send("Login route works");
    } catch (error) {
        console.log(error);
        error = req.error;
        return next();
    }
}

module.exports = {
    loginRoute,
}