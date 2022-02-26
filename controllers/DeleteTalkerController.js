const readFile = require('../utils/readFile');
const writeFile = require('../utils/writeFile');

const DeleteTalkerController = async (request, response) => {
  const { id } = request.params;

  const listTalkerJSON = await readFile('./talker.json');
  const listTalker = JSON.parse(listTalkerJSON);

  const listTalkerUpdated = listTalker.filter((talker) => talker.id !== +id);

  writeFile('./talker.json', JSON.stringify(listTalkerUpdated));
  
  response.status(204).end();
};

module.exports = DeleteTalkerController;