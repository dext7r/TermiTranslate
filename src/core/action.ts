import ora from 'ora'
import chalk from 'chalk'
import { getDictData, getSentenceData } from '../utils/tran-data'
import { formatDictReslut, formatSentenceResult } from '../utils/format'

const translationAcion = async (message: string): Promise<void> => {
  const loading = ora('开始查询').start()

  getDictData({ q: message })
    .then((res: any) => {
      if (res.result.code === 200) {
        const result = formatDictReslut(res.data.entries)
        loading.succeed(chalk.green('查询成功：'))
        console.log()
        console.log(result)
        console.log()
        console.log()
      } else if (res.result.code === 404) {
        getSentenceData({ q: message })
          .then((res: any) => {
            loading.succeed(chalk.green('查询成功：'))
            const result = formatSentenceResult(res.trans_result)
            console.log()
            console.log(result)
            console.log()
            console.log()
          })
          .catch((err) => {
            loading.fail(chalk.red('查询失败：'))
            console.log(err)
          })
      }
    })
    .catch((err) => {
      loading.fail(chalk.red('查询失败：'))
      console.log(err)
    })
}

export { translationAcion }
