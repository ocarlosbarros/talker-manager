const express = require('express');

const ListTalkerByIdController = require('./controllers/ListTalkerByIdController');
const ListTalkerController = require('./controllers/ListTalkerController');

const router = express.Router();

router.get('/talker', ListTalkerController);
router.get('/talker/:id', ListTalkerByIdController);

module.exports = router;

/**
 * @author Carlos Barros
 * @since Desenvolvido em 2022-02-15 
 * @version 1.0.0
 */