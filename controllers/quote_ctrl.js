const { Quote } = require("../models");

const quoteIndex = function(req, res, next){
    try {
        return res.send("Quotes INDEX route works");
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
}

const quoteShow = function(req, res, next){
    try {
        return res.send(`Quotes SHOW route works with id: ${req.params.id}`);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
}

const quoteCreate = function(req, res, next){
    try {
        return res.send(`Quotes CREATE route works with id: ${req.params.id}`);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
}

const quoteUpdate = function(req, res, next){
    try {
        return res.send(`Quotes UPDATE route works with id: ${req.params.id}`);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
}



module.exports = {
    quoteIndex,
    quoteShow,
    quoteCreate,
    quoteUpdate,
}