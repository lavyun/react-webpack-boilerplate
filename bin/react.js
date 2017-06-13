#!/usr/bin/env node

var program = require('commander')

program
  .version(require('../package').version)
  .usage('<command>')
  .command('init', 'generate a new project from a template')
  .parse(process.argv)
