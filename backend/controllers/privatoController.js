const asyncHandler = require("express-async-handler");
// @desc Crea a utente - Privato
// @route POST /api/privato
// @access PRIVATE
const createPrivato = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "User Privato created" })
})

// @desc Modifica a utente - Privato
// @route PUT /api/privato/:id
// @access PRIVATE
const updatePrivato = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Utente Privato modificato" })
})



module.exports = {
    createPrivato,
    updatePrivato,
}