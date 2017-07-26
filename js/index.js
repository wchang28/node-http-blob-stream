"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $node = require("rest-node");
function get(url, options) {
    return $node.get().$B(url, {}, options)
        .then(function (ret) {
        var type = ret.headers["content-type"];
        var contentLength = ret.headers["content-length"];
        var size = (contentLength ? parseInt(contentLength) : null);
        var readable = ret.data;
        return { info: { type: type, size: size }, readable: readable };
    });
}
exports.get = get;
