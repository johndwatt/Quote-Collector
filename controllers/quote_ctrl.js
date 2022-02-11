const { Quote } = require("../models");

const quoteIndex = function(req, res, next){
    try {
        return res.send("Quotes index page works");
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
}

module.exports = {
    quoteIndex,
}