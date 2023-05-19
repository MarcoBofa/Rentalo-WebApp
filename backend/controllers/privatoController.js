const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const Privato = require("../models/privatoModel")

// @desc Crea a utente - Privato
// @route POST /api/privato
// @access PRIVATE
const createPrivato = asyncHandler(async (req, res) => {

    const { name, surname, dateOfBirth, email, password } = req.body;

    // Check if user exists
    const privatoExists = await Privato.findOne({ email });

    if (privatoExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (!name || !surname || !email || !dateOfBirth || !password) {
        res.status(400)
        throw new Error('Riempire tutti i campi')
    }

    const privato = await Privato.create({
        name,
        surname,
        dateOfBirth,
        email,
        password: hashedPassword,
    })

    res.status(200).json({ privato })

})

// @desc Modifica a utente - Privato
// @route PUT /api/privato/:id
// @access PRIVATE
const updatePrivato = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Utente Privato modificato" })
})

// @desc Elimina utente - Privato
// @route DELETE /api/privato/:id
// @access DELETE
const deletePrivato = asyncHandler(async (req, res) => {

    const privato = await Privato.findById(req.params.id);

    if (!privato) {
        res.status(400)
        throw new Error('Utente non presente')
    }

    await privato.remove

    res.status(200).json({ message: `Utente Privato eliminato ${req.params.id}` })
})

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};

module.exports = {
    createPrivato,
    updatePrivato,
    deletePrivato,
}