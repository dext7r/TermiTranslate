"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TIMEOUT = exports.translationBase = void 0;
var translationBase = {
  youdao: {
    dict: 'https://dict.youdao.com'
  },
  baidu: {
    sentence: 'https://fanyi-api.baidu.com/',
    appid: '20240302001979983',
    salt: '121',
    key: 'Z8kY_gtrRsryQQnAkj4N'
  }
};
exports.translationBase = translationBase;
var TIMEOUT = 10000;
exports.TIMEOUT = TIMEOUT;
