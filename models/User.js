const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please provide a username to signup."],
            unique: [true, "There is already an account associated with this username. Please choose a different username or login instead."],
        },
        email: {
            type: String,
            required: [true, "Please provide an email to signup."],
            unique: [true, "There is already an account associated with this email. Please login instead."],
            match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        },
        password: {
            type: String,
            required: [true, "Please provide a password to signup."],
            select: false,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.set("toJSON", {
    transform: (doc, ret, opt) => {
      delete ret["password"];
      return ret;
    },
  });

const User = mongoose.model("User", userSchema);

module.exports = User;