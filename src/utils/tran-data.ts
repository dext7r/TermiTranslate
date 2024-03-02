import qs from 'qs'
import { ydDictInstance, bdSentenceInstance } from './request'
import { translationBase } from '../core/config'
import { md5String } from '../utils/md5'

const getDictData = (params: any) => {
  return ydDictInstance.get('suggest', {
    params: {
      ver: 3.0,
      doctype: 'json',
      cache: false,
      le: 'en',
      num: 3,
      ...params
    }
  })
}

const getSentenceData = (data: any) => {
  const { baidu } = translationBase
  const md5 = md5String(baidu.appid + data.q + baidu.salt + baidu.key)

  return bdSentenceInstance.post(
    'api/trans/vip/translate',
    qs.stringify({
      from: 'auto',
      to: 'auto',
      appid: translationBase.baidu.appid,
      salt: translationBase.baidu.salt,
      sign: md5,
      ...data
    })
  )
}

export { getDictData, getSentenceData }
