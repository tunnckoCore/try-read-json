/*!
 * try-read-json <https://github.com/tunnckoCore/try-read-json>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

module.exports = function tryReadJson (input, callback) {
  if (typeof callback !== 'function') {
    callback = false
  }
  if (typeof input !== 'string') {
    return callback ? callback(null, null) : null
  }
  if (input[0] !== '{' && input[0] !== '[') {
    return callback ? callback(null, null) : null
  }
  var json = false
  try {
    json = JSON.parse(input)
  } catch (e) {
    e.message = 'Failed to parse JSON data: ' + e.toString()
    return callback ? callback(e) : false
  }
  return callback && json ? callback(null, json) : json
}
