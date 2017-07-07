"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $node = require("rest-node");
function get(url, options) {
    return $node.get().$B(url, {}, options).then(function (ret) { return (ret.data); });
}
exports.get = get;
