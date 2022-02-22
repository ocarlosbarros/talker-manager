const CryptoJS = require('crypto-js');

/**
 * 
 * @param {*} email 
 * @returns token com valores aleatórios de length 16
 * source: https://cryptojs.gitbook.io/docs/
 */
const generateToken = (email) => {
  const hash = CryptoJS.SHA256(email, { outputLength: 224 });
  const token = { token: hash.toString(CryptoJS.enc.Base64).substring(0, 16) };
  return token;
};

module.exports = generateToken;