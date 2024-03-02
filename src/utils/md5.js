"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.md5String = void 0;
var crypto_1 = require("crypto");
var md5String = function (message) {
    var md5 = crypto_1.default.createHash('md5');
    var result = md5.update(message).digest('hex');
    return result;
};
exports.md5String = md5String;
