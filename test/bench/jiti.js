import consolji from 'consolji'

consolji.time('dynot_init')
const dynot = require('../..')(__filename)

consolji.timeEnd('dynot_init')

for (let i = 0; i < 3; i++) {
   consolji.time('dynot_require')
   dynot('../fixtures/esm').test()
   consolji.timeEnd('dynot_require')
}
