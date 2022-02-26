const express = require('express');

const CreateTalkerController = require('./controllers/CreateTalkerController');
const DeleteTalkerController = require('./controllers/DeleteTalkerController');
const ListTalkerByIdController = require('./controllers/ListTalkerByIdController');
const ListTalkerController = require('./controllers/ListTalkerController');
const SearchTalkerController = require('./controllers/SearchTalkerController');
const UpdateTalkerController = require('./controllers/UpdateTalkerController');

const auth = require('./middlewares/auth');
const ensureAuthenticate = require('./middlewares/ensureAuthenticate');
const talkerValidation = require('./middlewares/talkerValidation');

const router = express.Router();

router.post('/login', auth);
router.get('/talker', ListTalkerController);
router.get('/talker/search', ensureAuthenticate, SearchTalkerController);
router.get('/talker/:id', ListTalkerByIdController);
router.post('/talker', ensureAuthenticate, talkerValidation, CreateTalkerController);
router.put('/talker/:id', ensureAuthenticate, talkerValidation, UpdateTalkerController);
router.delete('/talker/:id', ensureAuthenticate, DeleteTalkerController);

module.exports = router;

/**
 * @author Carlos Barros
 * @since Desenvolvido em 2022-02-15 
 * @version 1.0.0
 */