import consolji from 'consolji'

// eslint-disable-next-line import/no-duplicates
import imported from './file.json'

// eslint-disable-next-line import/no-duplicates
import importedWithAssertion from './file.json' assert { type: 'json' }

const required = require('./file.json')

function debug(label: string, value) {
   return consolji.log(label, ':', value, '.default:', value.default)
}

debug('Imported', imported)
debug('Imported with assertion', importedWithAssertion)
debug('Required', required)

import('./file.json').then(r => debug('Dynamic Imported', r))
