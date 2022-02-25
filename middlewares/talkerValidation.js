const validateName = (name) => {
  if (!name) {
    return { message: 'O campo "name" é obrigatório' };
  } if (name.length < 3) {
  return { message: 'O "name" deve ter pelo menos 3 caracteres' };
  }
};

const validateAge = (age) => {
  if (!age) {
    return { message: 'O campo "age" é obrigatório' };
  } if (typeof age === 'number' && age < 18) {
    return { message: 'A pessoa palestrante deve ser maior de idade' };
  }
};

/**
 * Verifica se watchedAt tem um formato de data válido
 * Source: https://www.regextester.com/99555
 * @param {*} watchedAt 
 * @returns true caso seja um formato de data válido false caso não
 */
const validateWatchedAt = (watchedAt) => {
  if (!watchedAt) {
    return { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' };
  }
  const validDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
  const isValidDate = validDate.test(watchedAt);
  if (!isValidDate) {
    return { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' };
  }
};

const validateRate = (rate) => {
  if (!rate) {
    return { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' };
  }
  const numericRate = Number(rate);
  if (numericRate > 5 || numericRate < 1) {
    return { message: 'O campo "rate" deve ser um inteiro de 1 à 5' };
  }
};

const validateTask = (talk) => {
  let message;
  if (!talk) {
    return { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' };
  }
  const { watchedAt, rate } = talk;
  message = !message ? validateWatchedAt(watchedAt) : message;
  message = !message ? validateRate(rate) : message;
  return message;
};

// const allValidations = (name, age, talk) => {
//   let message;
//   message = !message ? validateName(name) : message;
//   message = !message ? validateAge(age) : message;
//   message = !message ? validateTask(talk) : message;
  
//   if (message) return { message, status: 400 };
//   return { message, status: 200 };
// };

const talkerValidation = (request, response, next) => {
  const { name, age, talk } = request.body;
  // const { message, status } = allValidations(name, age, talk);
  let message;
  message = !message ? validateName(name) : message;
  message = !message ? validateAge(age) : message;
  message = !message ? validateTask(talk) : message;
  
  if (message) return response.status(400).json(message);
  
  next();
};

module.exports = talkerValidation;