const express = require('express');

const ListTalkerByIdController = require('./controllers/ListTalkerByIdController');
const ListTalkerController = require('./controllers/ListTalkerController');
const CreateTalkerController = require('./controllers/CreateTalkerController');
const auth = require('./middlewares/auth');
const ensureAuthenticate = require('./middlewares/ensureAuthenticate');

const router = express.Router();

router.get('/talker', ListTalkerController);
router.get('/talker/:id', ListTalkerByIdController);
router.post('/login', auth);
router.post('/talker', ensureAuthenticate, CreateTalkerController);

module.exports = router;

/**
 * @author Carlos Barros
 * @since Desenvolvido em 2022-02-15 
 * @version 1.0.0
 */