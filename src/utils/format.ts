import chalk from 'chalk'

interface DictionaryEntry {
  entry: string
  explain: string
}

interface Sentence {
  src: string
  dst: string
}

const formatDictReslut = (data: DictionaryEntry[]): string => {
  let resultMessge = ''
  data.map((item, index) => {
    const result = item.explain.split('; ')
    let explainString = ''
    result.map((item, indey) => {
      explainString +=
        chalk.yellow(item) +
        (indey + 1 < result.length ? chalk.green(' | ') : '')
    })
    resultMessge +=
      `${chalk.blue(item.entry)}: ${explainString}` +
      (index + 1 < data.length ? '\n' : '')
  })
  return resultMessge
}

const formatSentenceResult = (data: Sentence[]): string => {
  let resultMessage = ''
  let index = 1

  data.forEach((item) => {
    resultMessage +=
      chalk.blue(item.src) +
      ': ' +
      chalk.yellow(item.dst) +
      (index < data.length ? '\n' : '')
    index++
  })
  return resultMessage
}

export { formatDictReslut, formatSentenceResult }
