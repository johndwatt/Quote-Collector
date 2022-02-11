const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: [true, "You cannot create an empty quote."]
        },
        author: {
            type: String,
            default: "Unknown"
        },
        tags: [{
            type: String,
        }],
    },
    {
        timestamps: true,
    }
);

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;