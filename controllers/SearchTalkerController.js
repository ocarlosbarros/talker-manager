const readFile = require('../utils/readFile');

const SearchTalkerController = async (request, response) => {
  const { q } = request.query;
  
  const listTalkerJSON = await readFile('./talker.json');
  const listTalker = JSON.parse(listTalkerJSON);
  
  if (!q) return response.status(200).json(listTalker);

  const filteredTalkers = listTalker.filter((talker) => talker.name.includes(q));

  if (!filteredTalkers) return response.status(200).json([]);

  response.status(200).json(filteredTalkers);
};

module.exports = SearchTalkerController;