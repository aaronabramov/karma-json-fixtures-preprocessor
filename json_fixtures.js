module.exports = (function () {
    'use strict';

    var util = require('util'),
        TEMPLATE = '' +
            'window.__fixtures__ = window.__fixtures__ || {};\n' +
            'window.__fixtures__[\'%s\'] = %s;\n';

    function createJsonFixturesPreprocessor(basePath) {
        return function (content, file, done) {
            var fixtureName = file.originalPath
                .replace(basePath + '/', '')
                .replace(/\.json$/, '');

            file.path = file.path.replace(/\.json$/, '.js');

            done(util.format(TEMPLATE, fixtureName, content));
        };
    }

    createJsonFixturesPreprocessor.$inject = ['config.basePath'];

    return createJsonFixturesPreprocessor;
})();
