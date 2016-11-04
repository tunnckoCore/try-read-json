/*!
 * try-read-json <https://github.com/tunnckoCore/try-read-json>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var tryCatch = require('try-catch-callback')

/**
 * > Parses `input` JSON value without throwing an errors.
 *
 * **Example**
 *
 * ```js
 * var tryReadJson = require('try-read-json')
 *
 * // synchronous
 * console.log(tryReadJson(1234)) // => 1234
 * console.log(tryReadJson('1234')) // => 1234
 * console.log(tryReadJson('["aaa", "bbb"]')) // => [ 'aaa', 'bbb' ]
 * console.log(tryReadJson('{"foo": "bar"}')) // => { foo: 'bar' }
 * console.log(tryReadJson(null)) // => null
 * console.log(tryReadJson(true)) // => true
 * console.log(tryReadJson(false)) // => false
 *
 * console.log(tryReadJson()) // => SyntaxError
 * console.log(tryReadJson(undefined)) // => SyntaxError
 * console.log(tryReadJson('{"foo:bxbba')) // => SyntaxError
 *
 * // with callback
 * tryReadJson('{"foo":"bar"}', function cb (err, obj) {
 *   console.log(err, obj) // => null, { foo: 'bar' }
 * })
 *
 * tryReadJson(123, function cb (err, num) {
 *   console.log(err, num) // => null, 123
 * })
 *
 * tryReadJson('["aaa", "bbb"]', function cb (err, arr) {
 *   console.log(err, arr) // => null, [ 'aaa', 'bbb' ]
 *   console.log(arr[0]) // => 'aaa'
 *   console.log(arr[1]) // => 'bbb'
 * })
 *
 * tryReadJson('{foo fail', function cb (err) {
 *   console.log(err) // => SyntaxError
 * })
 *
 * tryReadJson(undefined, function cb (err) {
 *   console.log(err) // => SyntaxError
 * })
 *
 * tryReadJson(true, function cb (err, bool) {
 *   console.log(err, bool) // => null, true
 * })
 * ```
 *
 * @param  {String|Number|Null|Boolean}   `input` json value
 * @param  {Function} `callback` optional callback
 * @return {Undefined|Error} if something fails and there's
 *                          no `callback` it returns that Error
 * @api public
 */

module.exports = function tryReadJson (input, callback) {
  return tryCatch(JSON.parse, {
    args: input,
    return: typeof callback !== 'function'
  }, callback)
}
