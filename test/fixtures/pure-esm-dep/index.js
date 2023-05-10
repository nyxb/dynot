import consolji from 'consolji'

// estree-walker is a pure ESM package
import { walk } from 'estree-walker'
import { parse } from 'acorn'

const ast = parse('const foo = "bar"', { ecmaVersion: 'latest' })

walk(ast, {
   enter(node) {
      consolji.log('Enter', node.type)
   },
})
