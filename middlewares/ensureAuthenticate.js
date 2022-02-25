const ensureAuthenticate = (request, response, next) => {
  const token = request.headers.authorization;
  if (!token) {
    return response.status(401).json({ message: 'Token não encontrado' }).end();
  }

  if (token.length < 16) response.status(401).json({ message: 'Token inválido' }).end();

  return next();
};

module.exports = ensureAuthenticate;