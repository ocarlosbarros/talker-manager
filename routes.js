const express = require('express');

const ListTalkerByIdController = require('./controllers/ListTalkerByIdController');
const ListTalkerController = require('./controllers/ListTalkerController');
const auth = require('./middlewares/auth');

const router = express.Router();

router.get('/talker', ListTalkerController);
router.get('/talker/:id', ListTalkerByIdController);
router.post('/login', auth);

module.exports = router;

/**
 * @author Carlos Barros
 * @since Desenvolvido em 2022-02-15 
 * @version 1.0.0
 */