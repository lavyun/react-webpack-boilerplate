#!/usr/bin/env node

var program = require('commander')

program
  .version(require('../package').version)
  .usage('[project-name] [options]')
  .option('-n, --next', 'use react 16')

program.on('--help', function () {
  console.log('options:')
  console.log()
  console.log('-n, --next: use react 16')
  console.log('Examples:')
  console.log()
  console.log('$ react init react-project')
  console.log('$ react init react-project-16 -n')
})

var pro_name = program.args[0]
var next = program.next || false

if(next) {
  program.command(`sao SidKwok/react-webpack-boilerplate ${pro_name} --install`)
} else {
  program.command(`sao SidKwok/react-webpack-boilerplate#next ${pro_name} --install`)
}