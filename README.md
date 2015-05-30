# try-read-json [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Fast, meaningful and correct try/catch flow for reading JSON with JSON.parse - support optional callback

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i try-read-json --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

- `input` **{String}** string to parse as JSON
- `callback` **{Function}** optional callback

## Type of returns
- if don't have callback or is not a function
  + `null` when `input` is not a string
  + `null` when `input` is invalid JSON
  + `false` when JSON.parse throws
- if callback is function `callback(err, json)`
  + `err` and `json` are `null` when `input` is not a string
  + `err` and `json` are `null` when `input` is invalid JSON
  + `err` is error and `json === undefined`, when JSON.parse throws

```js
var tryReadJson = require('try-read-json')

tryReadJson(12345)
//=> null

tryReadJson(12345, function (err, json) {
  console.log(err) //=> null
  console.log(json) //=> null
})

tryReadJson('foo bar baz')
//=> null

tryReadJson('foo bar baz', function (err, json) {
  console.log(err) //=> null
  console.log(json) //=> null
})

tryReadJson('{"foo": "bar"}')
//=> {foo: 'bar'}

tryReadJson('{"foo": "bar"}', function (err, json) {
  console.log(err) //=> null
  console.log(json) //=> {foo: 'bar'}
})

tryReadJson('{"foo": "bar"\n"baz": ["qux"]}')
//=> false, because Syntax Error

tryReadJson('{"foo": "bar"\n"baz": ["qux"]}', function (err, json) {
  console.log(err) //=> SyntaxError: 'Unexpected string'
  console.log(json) //=> undefined
})
```


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/try-read-json/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/try-read-json
[npmjs-img]: https://img.shields.io/npm/v/try-read-json.svg?label=try-read-json

[license-url]: https://github.com/tunnckoCore/try-read-json/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/try-read-json
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/try-read-json.svg

[travis-url]: https://travis-ci.org/tunnckoCore/try-read-json
[travis-img]: https://img.shields.io/travis/tunnckoCore/try-read-json.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/try-read-json
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/try-read-json.svg

[david-url]: https://david-dm.org/tunnckoCore/try-read-json
[david-img]: https://img.shields.io/david/dev/tunnckoCore/try-read-json.svg

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

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
