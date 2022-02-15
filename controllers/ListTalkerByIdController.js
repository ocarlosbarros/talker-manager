const readFile = require('../utils/readFile');

const PATHFILE = './talker.json';

const ListTalkerByIdController = (request, response) => {
  const { id } = request.params;
  readFile(PATHFILE)
    .then((content) => {
      const contentJSON = JSON.parse(content);
      const talkerFound = contentJSON.find((talker) => talker.id === +id);
      if (!talkerFound) response.status(404).json({ message: 'Pessoa palestrante não encontrada' });
      return response.status(200).json(talkerFound);
    })
    .catch((error) => console.error(error.message));
};

module.exports = ListTalkerByIdController;