karma-json-fixtures-preprocessor
================================

[![Build Status](https://travis-ci.org/dmitriiabramov/karma-json-fixtures-preprocessor.svg)](https://travis-ci.org/dmitriiabramov/karma-json-fixtures-preprocessor)

##### Preprocessor for converting .json files into .js files and making them accessible from karma test environment

## Installation
```json
{
    "devDependencies": {
        "karma": "~0.12.1",
        "karma-json-fixtures-preprocessor": "0.0.4"
    }
}
```

## Configuration
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    preprocessors: {
      './fixtures/**/*.json': ['json_fixtures']
    },

    files: [
      './fixtures/**/*.json'
    ],
    jsonFixturesPreprocessor: {
      // strip this from the file path \ fixture name
      stripPrefix: 'test/fixtures',
      // strip this to the file path \ fixture name
      prependPrefix: 'mock/',
      // change the global fixtures variable name
      variableName: '__mocks__',
      // camelize fixture filenames (e.g 'fixtures/aa-bb_cc.json' becames __fixtures__['fixtures/aaBbCc'])
      camelizeFilenames: true,
      // transform the filename
      transformPath: function(path) {
        return path + '.js';
      }
    }
  });
};
```

## How it works

Preprocessor requires .json files and converts them into .js files by storing json data as javascript objects under `__fixtures__` namespace.

the following file:
`./fixtures/test.json`
```json
{
    "a": "test"
}
```
will be accessible in your test environment:
```js
var fixture = window.__fixtures__['fixtures/test'];
fixture["a"] // => 'test'
```
