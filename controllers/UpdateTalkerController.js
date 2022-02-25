const UpdateTalkerController = (request, response) => {
  const id = request.params;
  response.status(200).json(id);
};

module.exports = UpdateTalkerController;