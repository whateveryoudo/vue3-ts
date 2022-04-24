/*
 * @Author: ykx
 * @Date: 2022-04-20 11:45:05
 * @LastEditTime: 2022-04-24 09:47:40
 * @LastEditors: your name
 * @Description: 请求方法
 * @FilePath: \my-vue-app\src\utils\request.ts
 */
import type { AxiosRequestConfig } from 'axios'
import axios from 'axios';
import { message as $message } from 'ant-design-vue'
export type Response<T = any> = {
  code: number;
  message: string;
  data: T;
};

export type BaseResponse<T = any> = Promise<Response<T>>;
interface RequestOption {
  isMock?: boolean
}
const service = axios.create({
  timeout:6000
})
const baseApiUrl = import.meta.env.VITE_GLOB_BASE_API;
// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code !== 200) {
      $message.error(res.message)
      const error = new Error(res.message) as Error & { code: any }; // 交叉类型？
      return Promise.reject(error);
    } else {
      return res;
    }
  }
)
const test = () => {}
export const request = async <T = any>(
  config: AxiosRequestConfig,
  options: RequestOption = {}
): Promise<T> => {
  const {} = options;
  const fullUrl = `${baseApiUrl}${config.url}`;
  config.url = fullUrl;
  const res = await service.request(config);
  return res.data;
};