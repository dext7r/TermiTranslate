#!/usr/bin/env node
import { program } from 'commander'
import { registerCommands } from './core/command'
import pkg from '../package.json'
program.version(pkg.version, '-v, --version', '打印版本号')
program.helpOption('-h, --help', '帮助信息')
registerCommands()
program.parse(process.argv)
