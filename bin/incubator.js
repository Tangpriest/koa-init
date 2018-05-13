#!/usr/bin / env node
const program = require('commander')
const init = require('../lib/generateStructure')

program
    .version(require('../package.json').version)
    .usage('[options] [project name]')
    .parse(process.argv)

const projectName = program.args[0]

init(projectName)
