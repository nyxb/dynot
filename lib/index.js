function onError(err) {
   throw err /* ↓ Check stack trace ↓ */
}

module.exports = function (filename, opts) {
   const dynot = require('../dist/dynot')

   opts = { onError, ...opts }

   if (!opts.transform)
      opts.transform = require('../dist/babel')

   return dynot(filename, opts)
}
