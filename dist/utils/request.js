"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bdSentenceInstance = exports.ydDictInstance = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../core/config");
const ydDictInstance = axios_1.default.create({
    baseURL: config_1.translationBase.youdao.dict,
    timeout: config_1.TIMEOUT
});
exports.ydDictInstance = ydDictInstance;
ydDictInstance.interceptors.response.use((res) => {
    return res.data;
}, (err) => {
    console.log(err);
    return err;
});
const bdSentenceInstance = axios_1.default.create({
    baseURL: config_1.translationBase.baidu.sentence,
    timeout: config_1.TIMEOUT,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
});
exports.bdSentenceInstance = bdSentenceInstance;
bdSentenceInstance.interceptors.request.use((config) => {
    return config;
});
bdSentenceInstance.interceptors.response.use((res) => {
    return res.data;
});
