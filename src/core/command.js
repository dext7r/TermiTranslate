"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCommands = void 0;
var commander_1 = require("commander");
var action_1 = require("./action");
var registerCommands = function () {
    commander_1.program.argument('<message>', '需要翻译的信息').action(action_1.translationAcion);
};
exports.registerCommands = registerCommands;
