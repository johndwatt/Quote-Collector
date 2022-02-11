const { Quote } = require("../models");

const quoteIndex = function(req, res, next){
    try {
        Quote.find()
            .then(foundQuotes => res.status(200).json({
                quotes: foundQuotes,
            }))
            .catch(error => res.status(400).json('Error:', error)
        );
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
        const content = req.body.content;
        const author = req.body.author;
        const tags = req.body.tags;
    
        const newQuote = new Quote({
            content,
            author,
            tags,
        });
    
        newQuote.save()
            .then(() => res.status(201).json("Quote added!"))
            .catch(err => res.status(400).json('Error: ', err));
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

const quoteDelete = function(req, res, next){
    try {
        return res.send(`Quotes DELETE route works with id: ${req.params.id}`);
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
    quoteDelete
}