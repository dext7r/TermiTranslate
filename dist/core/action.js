"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.translationAcion = void 0;
const ora_1 = __importDefault(require("ora"));
const chalk_1 = __importDefault(require("chalk"));
const tran_data_1 = require("../utils/tran-data");
const format_1 = require("../utils/format");
const translationAcion = async (message) => {
    const loading = (0, ora_1.default)('开始查询').start();
    (0, tran_data_1.getDictData)({ q: message })
        .then((res) => {
        if (res.result.code === 200) {
            const result = (0, format_1.formatDictReslut)(res.data.entries);
            loading.succeed(chalk_1.default.green('查询成功：'));
            console.log();
            console.log(result);
            console.log();
            console.log();
        }
        else if (res.result.code === 404) {
            (0, tran_data_1.getSentenceData)({ q: message })
                .then((res) => {
                loading.succeed(chalk_1.default.green('查询成功：'));
                const result = (0, format_1.formatSentenceResult)(res.trans_result);
                console.log();
                console.log(result);
                console.log();
                console.log();
            })
                .catch((err) => {
                loading.fail(chalk_1.default.red('查询失败：'));
                console.log(err);
            });
        }
    })
        .catch((err) => {
        loading.fail(chalk_1.default.red('查询失败：'));
        console.log(err);
    });
};
exports.translationAcion = translationAcion;
