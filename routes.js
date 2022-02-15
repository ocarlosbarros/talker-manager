const express = require('express');

const ListTalkerController = require('./controllers/ListTalkerController');

const router = express.Router();

router.get('/talker', ListTalkerController);

module.exports = router;

/**
 * @author Carlos Barros
 * @since Desenvolvido em 2022-02-15 
 * @version 1.0.0
 */