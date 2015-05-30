/*!
 * try-read-json <https://github.com/tunnckoCore/try-read-json>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var tryReadJson = require('./index')

test('try-read-json:', function () {
  test('should return null if not a string and no callback', function (done) {
    var actual = tryReadJson(12345)
    var expected = null

    test.equal(actual, expected)
    done()
  })
  test('should be callback(null, null) not a string, but callback', function (done) {
    tryReadJson(12345, function (err, json) {
      var actual = json
      var expected = null

      test.equal(err, null)
      test.equal(actual, expected)
      done()
    })
  })
  test('should return null if not valid JSON and no callback', function (done) {
    var actual = tryReadJson('foo bar baz')
    var expected = null

    test.equal(actual, expected)
    done()
  })
  test('should be callback(null, null) if not valid JSON, but callback', function (done) {
    tryReadJson('foo bar baz', function (err, json) {
      var actual = json
      var expected = null

      test.equal(err, null)
      test.equal(actual, expected)
      done()
    })
  })
  test('should return JSON if it is valid and no callback', function (done) {
    var actual = tryReadJson('{"foo": "bar"}')
    var expected = {foo: 'bar'}

    test.deepEqual(actual, expected)
    done()
  })
  test('should be callback(null, json), if valid JSON given', function (done) {
    tryReadJson('{"foo": "bar"}', function (err, json) {
      var actual = json
      var expected = {foo: 'bar'}

      test.equal(err, null)
      test.deepEqual(actual, expected)
      done()
    })
  })
  test('should return false if JSON.parse throws and no callback', function (done) {
    var actual = tryReadJson('{"foo": "bar"\n"baz": ["qux"]}')
    var expected = false

    test.deepEqual(actual, expected)
    done()
  })
  test('should be callback(err), if JSON.parse throws', function (done) {
    tryReadJson('{"foo": "bar"\n"baz": ["qux"]}', function (err, json) {
      test.ifError(!err, 'should be error')
      test.equal(err.message, 'Unexpected string')
      test.equal(json, undefined)
      done()
    })
  })
})
