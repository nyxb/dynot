import 'reflect-metadata'
import consolji from 'consolji'

function decorator(...args: any) {
   consolji.log(`Decorator called with ${args.length} arguments.`)
}

function anotherDecorator() {
   return function (object: any, propertyName: any) {
      consolji.log(
         `Decorator metadata keys: ${
         Reflect.getMetadataKeys(object, propertyName)}`,
      )
   }
}

@decorator
export default class DecoratedClass {
   @anotherDecorator()
  decoratedProperty: string

   @decorator
   get decoratedAccessor() {
      return null
   }

   @decorator
   // @ts-expect-error this is fine
   decoratedFunction(@decorator decoratedParameter: any) {
      return decoratedParameter
   }

   constructor() {
      this.decoratedProperty = 'foo'
   }
}
