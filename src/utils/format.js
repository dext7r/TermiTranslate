"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatSentenceResult = exports.formatDictReslut = void 0;
var chalk_1 = require("chalk");
var formatDictReslut = function (data) {
    var resultMessge = '';
    data.map(function (item, index) {
        var result = item.explain.split('; ');
        var explainString = '';
        result.map(function (item, indey) {
            explainString +=
                chalk_1.default.yellow(item) +
                    (indey + 1 < result.length ? chalk_1.default.green(' | ') : '');
        });
        resultMessge +=
            "".concat(chalk_1.default.blue(item.entry), ": ").concat(explainString) +
                (index + 1 < data.length ? '\n' : '');
    });
    return resultMessge;
};
exports.formatDictReslut = formatDictReslut;
var formatSentenceResult = function (data) {
    var resultMessage = '';
    var index = 1;
    data.forEach(function (item) {
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
