import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import { translationBase, TIMEOUT } from '../core/config'

const ydDictInstance: AxiosInstance = axios.create({
  baseURL: translationBase.youdao.dict,
  timeout: TIMEOUT
})

ydDictInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res.data
  },
  (err: AxiosError) => {
    console.log(err)
    return err
  }
)

const bdSentenceInstance: AxiosInstance = axios.create({
  baseURL: translationBase.baidu.sentence,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

bdSentenceInstance.interceptors.request.use((config) => {
  return config
})

bdSentenceInstance.interceptors.response.use((res: AxiosResponse) => {
  return res.data
})

export { ydDictInstance, bdSentenceInstance }
