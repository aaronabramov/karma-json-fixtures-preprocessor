/*
 * Copyright (c) 2014, Yahoo Inc. All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

/**
 * Transform a string to camelCase
 *
 * @param {String} str
 * @return {String} camel cased string
 */
module.exports = function camalize(str) {
    str = str.replace(/^[\-\_]*/, '');
    str = str.replace(/[\-\_]*$/, '');

    return str.replace(/(?:_|-)(\w)/g, function(q, c) {
        return c ? c.toUpperCase() : '';
    });
}
