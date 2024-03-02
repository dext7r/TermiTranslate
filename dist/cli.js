#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const command_1 = require("./core/command");
const package_json_1 = __importDefault(require("../package.json"));
commander_1.program.version(package_json_1.default.version, '-v, --version', '打印版本号');
commander_1.program.helpOption('-h, --help', '帮助信息');
(0, command_1.registerCommands)();
commander_1.program.parse(process.argv);
