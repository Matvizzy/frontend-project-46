const fs = require('fs');
const path = require('path');

const parseFile = (filepath) => {
  const absolutePath = path.resolve(filepath);
  const fileContent = fs.readFileSync(absolutePath, 'utf-8');
  const extname = path.extname(filepath);

  if (extname === '.json') {
    return JSON.parse(fileContent);
  }

  throw new Error(`Unsupported file format: ${extname}`);
};

module.exports = parseFile;
