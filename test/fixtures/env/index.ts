import consolji from 'consolji'

consolji.log('process.env.TEST', process.env.TEST)
// @ts-expect-error is fine
consolji.log('import.meta.env.TEST', import.meta.env.TEST)
