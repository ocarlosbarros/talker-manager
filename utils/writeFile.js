const fs = require('fs');

const writeFile = (pathFile, content) => {
    fs.writeFile(pathFile, content, (error) => {
      if (error) return error;
      return 'Arquivo escrito com sucesso';
    });
};

module.exports = writeFile;