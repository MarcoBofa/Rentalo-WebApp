const mongoose = require("mongoose");

const aziendaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide your name"],
        trim: true,
        maxlength: [50, "Name cannot be more than 50 characters"],
    },
    piva: {
        type: String,
        required: [true, "Please provide the partita iva"],
        trim: true,
        maxlength: [50, "Surname cannot be more than 50 characters"],
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        trim: true,
        unique: true,
        maxlength: [50, "Email cannot be more than 50 characters"],
    }
});

module.exports = mongoose.model("Azienda", aziendaSchema);
