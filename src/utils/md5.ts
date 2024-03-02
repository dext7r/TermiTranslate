import crypto from 'crypto'

const md5String = (message: string): string => {
  const md5 = crypto.createHash('md5')
  const result = md5.update(message).digest('hex')
  return result
}

export { md5String }
