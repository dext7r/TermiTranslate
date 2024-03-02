"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSentenceData = exports.getDictData = void 0;
const qs_1 = __importDefault(require("qs"));
const request_1 = require("./request");
const config_1 = require("../core/config");
const md5_1 = require("../utils/md5");
const getDictData = (params) => {
    return request_1.ydDictInstance.get('suggest', {
        params: Object.assign({ ver: 3.0, doctype: 'json', cache: false, le: 'en', num: 3 }, params)
    });
};
exports.getDictData = getDictData;
const getSentenceData = (data) => {
    const { baidu } = config_1.translationBase;
    const md5 = (0, md5_1.md5String)(baidu.appid + data.q + baidu.salt + baidu.key);
    return request_1.bdSentenceInstance.post('api/trans/vip/translate', qs_1.default.stringify(Object.assign({ from: 'auto', to: 'auto', appid: config_1.translationBase.baidu.appid, salt: config_1.translationBase.baidu.salt, sign: md5 }, data)));
};
exports.getSentenceData = getSentenceData;
