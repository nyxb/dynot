import consolji from 'consolji'

async function main() {
   await import('./async.mjs').then(m => consolji.log(m.async))
}

main().catch(console.error)
