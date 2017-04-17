"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $node = require("rest-node");
function get(url, options) {
    return new Promise(function (resolve, reject) {
        $node.get().$B(url, function (err, rs, headers) {
            if (err)
                reject(err);
            else
                resolve(rs);
        }, options);
    });
}
exports.get = get;
