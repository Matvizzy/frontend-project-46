#!/usr/bin/env node
import { Command } from 'commander';

import gendiff from '../index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .helpOption('-h, --help', 'output usage information')
  .action((filepath1, filepath2) => {
    const formatName = program.opts().format;
    console.log(gendiff(filepath1, filepath2, formatName));
  });
program.parse();
