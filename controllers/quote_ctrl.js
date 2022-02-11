const { Quote } = require("../models");

const quoteIndex = function(req, res, next){
    try {
        return res.send("Quotes INDEX page works");
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
}

const quoteShow = function(req, res, next){
    try {
        return res.send(`Quotes SHOW page works with id: ${req.params.id}`);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
}

const quoteUpdate = function(req, res, next){
    try {
        return res.send(`Quotes UPDATE page works with id: ${req.params.id}`);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
}

module.exports = {
    quoteIndex,
    quoteShow,
    quoteUpdate
}