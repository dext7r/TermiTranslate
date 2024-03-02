#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var command_1 = require("./core/command");
var package_json_1 = require("../package.json");
commander_1.program.version(package_json_1.default.version, '-v, --version', '打印版本号');
commander_1.program.helpOption('-h, --help', '帮助信息');
(0, command_1.registerCommands)();
commander_1.program.parse(process.argv);
