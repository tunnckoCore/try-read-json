# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.0.0"></a>
# [2.0.0](https://github.com/tunnckocore/try-read-json/compare/v1.0.0...v2.0.0) (2016-11-04)


### Code Refactoring

* **index.js:** switch to use try-catch-callback ([104e88e](https://github.com/tunnckocore/try-read-json/commit/104e88e))


### BREAKING CHANGES

* index.js: always return result or error if no callback. also it was not correct because it

was accepting only json object and array, now everything is fine. Never throws.





## 1.0.0 - 2015-05-30
- Release v1.0.0 / npm@v1.0.0
- add keywords
- fix readme
- prepend `err.message` with `Failed to parse...`
- update readme

## 0.0.0 - 2015-05-30
- first commits