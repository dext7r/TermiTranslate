import { program } from 'commander'
import { translationAcion } from './action'

const registerCommands = () => {
  program.argument('<message>', '需要翻译的信息').action(translationAcion)
}

export { registerCommands }
