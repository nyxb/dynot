import consolji from 'consolji'

consolji.time('esm_init')
const esm = require('esm')(module)

consolji.timeEnd('esm_init')

for (let i = 0; i < 2; i++) {
   consolji.time('esm_require')
   esm('../fixtures/esm').test()
   consolji.timeEnd('esm_require')
}
