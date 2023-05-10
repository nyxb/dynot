import consolji from 'consolji'
import test, { FeedService } from './test'
import Clazz from './decorators'
import { test as satisfiesTest } from './satisfies'
import { child } from './parent.mjs'

export type { Test } from './types'

consolji.log(test(), FeedService, Clazz)
consolji.log(satisfiesTest())
consolji.log(child())
