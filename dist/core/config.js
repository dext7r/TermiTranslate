"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TIMEOUT = exports.translationBase = void 0;
const translationBase = {
    youdao: {
        dict: 'https://dict.youdao.com'
    },
    baidu: {
        sentence: 'https://fanyi-api.baidu.com/',
        appid: '20220626001257099',
        salt: '121',
        key: 'UzAECNbrxoNxLZSF9bnk'
    }
};
exports.translationBase = translationBase;
const TIMEOUT = 10000;
exports.TIMEOUT = TIMEOUT;
