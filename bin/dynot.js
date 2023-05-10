#!/usr/bin/env node

const { resolve } = require('path')

const script = process.argv.splice(2, 1)[0]

if (!script) {
   console.error('Usage: dynot <path> [...arguments]')
   process.exit(1)
}

const pwd = process.cwd()
const dynot = require('..')(pwd)

const resolved = (process.argv[1] = dynot.resolve(resolve(pwd, script)))
dynot(resolved)
