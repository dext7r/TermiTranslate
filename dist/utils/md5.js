"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.md5String = void 0;
const crypto_1 = __importDefault(require("crypto"));
const md5String = (message) => {
    const md5 = crypto_1.default.createHash('md5');
    const result = md5.update(message).digest('hex');
    return result;
};
exports.md5String = md5String;
