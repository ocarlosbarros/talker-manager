const readFile = require('../utils/readFile');
const writeFile = require('../utils/writeFile');

const UpdateTalkerController = async (request, response) => {
  const { id } = request.params;
  const { name, age, talk } = request.body;

  const listTalkerJSON = await readFile('./talker.json');
  let listTalker = JSON.parse(listTalkerJSON);
  const talkerFound = listTalker.find((talker) => talker.id === +id);
  if (!talkerFound) return response.status(404).json({ message: 'Not Found!' });

  const updatedTalker = { ...talkerFound, name, age, talk };
  listTalker = [...listTalker.filter((talker) => talker.id !== +id), updatedTalker];
  const orderedTalker = listTalker
  .sort((firstTalker, secondTalker) => firstTalker.id - secondTalker.id);
  writeFile('./talker.json', JSON.stringify(orderedTalker));

  response.status(200).json(updatedTalker);
};

module.exports = UpdateTalkerController;