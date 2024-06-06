const fs = require('fs');
const path = require('path');
const genDiff = require('../src/index.js');

const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff flat json files', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const expected = readFile('expected_diff.txt');
  
  const diff = genDiff(filepath1, filepath2);
  expect(diff).toBe(expected);
});
