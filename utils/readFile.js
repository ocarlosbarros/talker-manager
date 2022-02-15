const fs = require('fs').promises;

const readFile = async (pathFile) => {
  const content = await fs.readFile(pathFile, 'utf-8');
  return content;
};

module.exports = readFile;