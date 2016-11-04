# [try-read-json][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> Graceful reading of JSON value, using JSON.parse with support for optional callback

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
> Install with [npm](https://www.npmjs.com/)

```sh
$ npm i try-read-json --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const tryReadJson = require('try-read-json')
```

## API

### [tryReadJson](index.js#L68)
> Parses `input` JSON value without throwing an errors.

**Params**

* `input` **{String|Number|Null|Boolean}**: json value    
* `callback` **{Function}**: optional callback    
* `returns` **{Undefined|Error}**: if something fails and there's no `callback` it returns that Error  

**Example**

```js
var tryReadJson = require('try-read-json')

// synchronous
console.log(tryReadJson(1234)) // => 1234
console.log(tryReadJson('1234')) // => 1234
console.log(tryReadJson('["aaa", "bbb"]')) // => [ 'aaa', 'bbb' ]
console.log(tryReadJson('{"foo": "bar"}')) // => { foo: 'bar' }
console.log(tryReadJson(null)) // => null
console.log(tryReadJson(true)) // => true
console.log(tryReadJson(false)) // => false

console.log(tryReadJson()) // => SyntaxError
console.log(tryReadJson(undefined)) // => SyntaxError
console.log(tryReadJson('{"foo:bxbba')) // => SyntaxError

// with callback
tryReadJson('{"foo":"bar"}', function cb (err, obj) {
  console.log(err, obj) // => null, { foo: 'bar' }
})

tryReadJson(123, function cb (err, num) {
  console.log(err, num) // => null, 123
})

tryReadJson('["aaa", "bbb"]', function cb (err, arr) {
  console.log(err, arr) // => null, [ 'aaa', 'bbb' ]
  console.log(arr[0]) // => 'aaa'
  console.log(arr[1]) // => 'bbb'
})

tryReadJson('{foo fail', function cb (err) {
  console.log(err) // => SyntaxError
})

tryReadJson(undefined, function cb (err) {
  console.log(err) // => SyntaxError
})

tryReadJson(true, function cb (err, bool) {
  console.log(err, bool) // => null, true
})
```

## Related
- [always-done](https://www.npmjs.com/package/always-done): Handle completion and errors with elegance! Support for streams, callbacks, promises, child processes, async/await and sync functions. A drop-in replacement for [async-done… [more](https://github.com/hybridables/always-done#readme) | [homepage](https://github.com/hybridables/always-done#readme "Handle completion and errors with elegance! Support for streams, callbacks, promises, child processes, async/await and sync functions. A drop-in replacement for [async-done][] - pass 100% of its tests plus more")
- [then-parse-json](https://www.npmjs.com/package/then-parse-json): Gracefully parse JSON using promises - promisified JSON.parse | [homepage](https://github.com/tunnckocore/then-parse-json#readme "Gracefully parse JSON using promises - promisified JSON.parse")
- [to-callback](https://www.npmjs.com/package/to-callback): Converts result-first callbacks to classic (node.js-style) error-first callbacks with 3 lines of code. Useful when you want to promisify result-first APIs (like… [more](https://github.com/tunnckocore/to-callback#readme) | [homepage](https://github.com/tunnckocore/to-callback#readme "Converts result-first callbacks to classic (node.js-style) error-first callbacks with 3 lines of code. Useful when you want to promisify result-first APIs (like emitter.on). Inspired by [rfpify][] and probably used in it.")
- [try-catch-callback](https://www.npmjs.com/package/try-catch-callback): try/catch block with a callback, used in [try-catch-core][]. Use it when you don't care about asyncness so much and don't want guarantees… [more](https://github.com/hybridables/try-catch-callback#readme) | [homepage](https://github.com/hybridables/try-catch-callback#readme "try/catch block with a callback, used in [try-catch-core][]. Use it when you don't care about asyncness so much and don't want guarantees. If you care use [try-catch-core][].")
- [try-catch-core](https://www.npmjs.com/package/try-catch-core): Low-level package to handle completion and errors of sync or asynchronous functions, using [once][] and [dezalgo][] libs. Useful for and used in… [more](https://github.com/hybridables/try-catch-core#readme) | [homepage](https://github.com/hybridables/try-catch-core#readme "Low-level package to handle completion and errors of sync or asynchronous functions, using [once][] and [dezalgo][] libs. Useful for and used in higher-level libs such as [always-done][] to handle completion of anything.")
- [write-file](https://www.npmjs.com/package/write-file): Writing a file to disk, creates intermediate directories in the destination path if they dont already exist. | [homepage](https://github.com/tunnckocore/write-file#readme "Writing a file to disk, creates intermediate directories in the destination path if they dont already exist.")

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/try-read-json/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[always-done]: https://github.com/hybridables/always-done
[async-done]: https://github.com/gulpjs/async-done
[dezalgo]: https://github.com/npm/dezalgo
[once]: https://github.com/isaacs/once
[rfpify]: https://github.com/samverschueren/rfpify
[try-catch-core]: https://github.com/hybridables/try-catch-core

[npmjs-url]: https://www.npmjs.com/package/try-read-json
[npmjs-img]: https://img.shields.io/npm/v/try-read-json.svg?label=try-read-json

[license-url]: https://github.com/tunnckoCore/try-read-json/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/try-read-json.svg

[downloads-url]: https://www.npmjs.com/package/try-read-json
[downloads-img]: https://img.shields.io/npm/dm/try-read-json.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/try-read-json
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/try-read-json.svg

[travis-url]: https://travis-ci.org/tunnckoCore/try-read-json
[travis-img]: https://img.shields.io/travis/tunnckoCore/try-read-json/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/try-read-json
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/try-read-json.svg

[david-url]: https://david-dm.org/tunnckoCore/try-read-json
[david-img]: https://img.shields.io/david/tunnckoCore/try-read-json.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

