const readFile = require('../utils/readFile');

const ListTalkerController = (_request, response) => {
  readFile('./talker.json')
  .then((content) => {
    const contentJSON = JSON.parse(content);
    response.status(200).json(contentJSON);
  })
  .catch(() => response.status(204).json([]));
};

module.exports = ListTalkerController;

/**
 * @author Carlos Barros
 * @since Desenvolvido em 2022-02-15 
 * @version 1.0.0
 */