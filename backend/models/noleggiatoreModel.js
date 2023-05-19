const mongoose = require("mongoose");

const noleggiatoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide your name"],
        trim: true,
        maxlength: [50, "Name cannot be more than 50 characters"],
    },
    surname: {
        type: String,
        required: [true, "Please provide your surname"],
        trim: true,
        maxlength: [50, "Surname cannot be more than 50 characters"],
    },
    dateOfBirth: {
        type: Date,
        required: [true, "Please provide your date of birth"],
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        trim: true,
        unique: true,
        maxlength: [50, "Email cannot be more than 50 characters"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        trim: true,
        minlength: [6, "Password must have at least 6 characters"],
        select: false,
    }
});

module.exports = mongoose.model("Noleggiatore", noleggiatoreSchema);
