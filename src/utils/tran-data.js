"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSentenceData = exports.getDictData = void 0;
var qs_1 = require("qs");
var request_1 = require("./request");
var config_1 = require("../core/config");
var md5_1 = require("../utils/md5");
var getDictData = function (params) {
    return request_1.ydDictInstance.get('suggest', {
        params: __assign({ ver: 3.0, doctype: 'json', cache: false, le: 'en', num: 3 }, params)
    });
};
exports.getDictData = getDictData;
var getSentenceData = function (data) {
    var baidu = config_1.translationBase.baidu;
    var md5 = (0, md5_1.md5String)(baidu.appid + data.q + baidu.salt + baidu.key);
    return request_1.bdSentenceInstance.post('api/trans/vip/translate', qs_1.default.stringify(__assign({ from: 'auto', to: 'auto', appid: config_1.translationBase.baidu.appid, salt: config_1.translationBase.baidu.salt, sign: md5 }, data)));
};
exports.getSentenceData = getSentenceData;
