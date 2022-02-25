const writeFile = require('../utils/writeFile');
const readFile = require('../utils/readFile');

const CreateTalkerController = async (request, response) => {
  const { name, age, talk } = request.body;

  const listTalkerJSON = await readFile('./talker.json');
  const listTalker = JSON.parse(listTalkerJSON);
  const id = listTalker.length + 1;
  const newTalk = { name, age, id, talk }; 

  listTalker.push(newTalk);

  writeFile('./talker.json', JSON.stringify(listTalker));

  return response.status(201).json(newTalk);
};

module.exports = CreateTalkerController;