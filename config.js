/**
  Source: Utilizando variaveis de  com nodejs
  Link: https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786 
*/

const dotenv = require('dotenv');

const config = dotenv.config();

if (config.error) {
  throw config.error;
}

const { parsed: envs } = config; 
console.log(envs);
module.exports = envs;