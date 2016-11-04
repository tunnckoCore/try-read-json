/*!
 * try-read-json <https://github.com/tunnckoCore/try-read-json>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('mukla')
var tryReadJson = require('./index')

test('should return error if `input` is `undefined` and no callback', function (done) {
  var err = tryReadJson()
  test.strictEqual(err.name, 'SyntaxError')
  test.strictEqual(/Unexpected/.test(err.message), true)
  done()
})

test('should pass error to callback if `input` is `undefined`', function (done) {
  tryReadJson(undefined, function (err) {
    test.ok(/Unexpected/.test(err.message))
    test.strictEqual(err.name, 'SyntaxError')
  })
  done()
})

test('should return error if JSON.parse throws', function (done) {
  var ret = tryReadJson('{boo":"bar')
  test.ok(/Unexpected token b/.test(ret.message))
  test.strictEqual(ret.name, 'SyntaxError')
  done()
})

test('should pass parsed result to callback if input is JSON value', function (done) {
  tryReadJson(123, function (err, res) {
    test.strictEqual(err, null)
    test.strictEqual(res, 123)
    done()
  })
})

test('should pass parsed json object to the callback', function (done) {
  tryReadJson('{"foo":"bar"}', function (err, obj) {
    test.ok(err === null)
    test.strictEqual(typeof obj, 'object')
    test.strictEqual(obj.foo, 'bar')
    done()
  })
})
