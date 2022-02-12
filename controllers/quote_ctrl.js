const { Quote } = require("../models");

const quoteIndex = function(req, res, next){
    Quote.find()
        .then(foundQuotes => res.status(200).json({
            quotes: foundQuotes,
        }))
        .catch(error => res.status(400).json('Error:', error));
}

const quoteShow = function(req, res, next){
    Quote.findById(req.params.id)
        .then(foundQuote => res.status(200).json({
            quote: foundQuote,
        }))
        .catch(error => res.status(400).json('Error:', error)
    );
}

const quoteCreate = function(req, res, next){
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
        .catch(error => res.status(400).json('Error: ', error));
}

const quoteUpdate = function(req, res, next){
    Quote.findById(req.params.id)
        .then(foundQuote => {
            foundQuote.content = req.body.content;
            foundQuote.author = req.body.author;
            foundQuote.tags = req.body.tags;

            foundQuote.save()
            .then(() => res.status(200).json("Quote updated!"))
            .catch(error => res.status(400).json('Error:', error));
        })
        .catch(error => res.status(400).json('Error:', error));
}

const quoteDelete = function(req, res, next){
    Quote.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Quote Deleted!"))
    .catch(error => res.status(400).json('Error: ', error));
}

module.exports = {
    quoteIndex,
    quoteShow,
    quoteCreate,
    quoteUpdate,
    quoteDelete
}