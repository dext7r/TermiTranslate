"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bdSentenceInstance = exports.ydDictInstance = void 0;
var axios_1 = require("axios");
var config_1 = require("../core/config");
var ydDictInstance = axios_1.default.create({
    baseURL: config_1.translationBase.youdao.dict,
    timeout: config_1.TIMEOUT
});
exports.ydDictInstance = ydDictInstance;
ydDictInstance.interceptors.response.use(function (res) {
    return res.data;
}, function (err) {
    console.log(err);
    return err;
});
var bdSentenceInstance = axios_1.default.create({
    baseURL: config_1.translationBase.baidu.sentence,
    timeout: config_1.TIMEOUT,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
});
exports.bdSentenceInstance = bdSentenceInstance;
bdSentenceInstance.interceptors.request.use(function (config) {
    return config;
});
bdSentenceInstance.interceptors.response.use(function (res) {
    return res.data;
});
