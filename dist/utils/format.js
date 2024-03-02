"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatSentenceResult = exports.formatDictReslut = void 0;
const chalk_1 = __importDefault(require("chalk"));
const formatDictReslut = (data) => {
    let resultMessge = '';
    data.map((item, index) => {
        const result = item.explain.split('; ');
        let explainString = '';
        result.map((item, indey) => {
            explainString +=
                chalk_1.default.yellow(item) +
                    (indey + 1 < result.length ? chalk_1.default.green(' | ') : '');
        });
        resultMessge +=
            `${chalk_1.default.blue(item.entry)}: ${explainString}` +
                (index + 1 < data.length ? '\n' : '');
    });
    return resultMessge;
};
exports.formatDictReslut = formatDictReslut;
const formatSentenceResult = (data) => {
    let resultMessage = '';
    let index = 1;
    data.forEach((item) => {
        resultMessage +=
            chalk_1.default.blue(item.src) +
                ': ' +
                chalk_1.default.yellow(item.dst) +
                (index < data.length ? '\n' : '');
        index++;
    });
    return resultMessage;
};
exports.formatSentenceResult = formatSentenceResult;
