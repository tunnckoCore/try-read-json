/*!
 * try-read-json <https://github.com/tunnckoCore/try-read-json>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var tryCatch = require('try-catch-callback')

module.exports = function tryReadJson (input, callback) {
  return tryCatch(JSON.parse, {
    args: input,
    return: typeof callback !== 'function'
  }, callback)
}
