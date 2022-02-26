const generateToken = require('../service/generateToken');

const validateEmail = (email) => {
  const validRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (validRegex.test(email)) {
    return true;
  }
  return false;
};

const validatePassword = (password) => {
  if (password.length >= 6) {
    return true;
  }
  return false;
};

const allValidations = (email, password) => {
  const isValidEmail = validateEmail(email);
  const isValidPassword = validatePassword(password);
  if (!isValidEmail || !isValidPassword) {
    const message = !isValidEmail ? 'O "email" deve ter o formato "email@email.com"' 
    : 'O "password" deve ter pelo menos 6 caracteres';
    return { message };
  }
  const token = generateToken(email);
  return { token };
};

const auth = (request, response) => {
  const { email, password } = request.body;

  if (!email || !password) {
    return response.status(400)
    .json({ message: `O campo "${!email ? 'email' : 'password'}" é obrigatório` });
  }
  const { message, token } = allValidations(email, password);
  if (!token) return response.status(400).json({ message });
  
  response.status(200).json(token);
};

module.exports = auth;