const express = require('express');
const router = express.Router();
const { creaPrivato, updatePrivato } = require("../controllers/privatoController");

router.route('/').post(creaPrivato)
router.route('/_id').put(updatePrivato)


module.exports = router