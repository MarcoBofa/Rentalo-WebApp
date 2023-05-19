const express = require('express');
const router = express.Router();
const { creaPrivato, updatePrivato, deletePrivato } = require("../controllers/privatoController");

router.route('/').post(creaPrivato)
router.route('/_id').put(updatePrivato).delete(deletePrivato)


module.exports = router