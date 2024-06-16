import gendiff from '../index.js';
import JSONResult from '../fixtures/result/test3-4.js';
import stylishResult from '../fixtures/result/test5-6.js';
import plainResult from '../fixtures/result/test1-2.js';

describe('gendiff', () => {
  test('PlainDiffJS-YML', () => {
    expect(gendiff('file1.json', 'file2.yml', 'plain')).toEqual(plainResult);
  });

  test('jsonDiffYAML-JS', () => {
    expect(gendiff('file3.yaml', 'file4.json', 'json')).toEqual(JSONResult);
  });

  test('stylishDiffJS-JS', () => {
    expect(gendiff('file5.json', 'file6.json', 'stylish')).toEqual(stylishResult);
  });
});