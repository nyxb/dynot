import fs from 'node:fs'
import consolji from 'consolji'

consolji.log('exists:', fs.existsSync('index.js'))
