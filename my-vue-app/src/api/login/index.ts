/*
 * @Author: ykx
 * @Date: 2022-04-20 11:40:50
 * @LastEditTime: 2022-04-22 14:44:59
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\api\login\index.ts
 */
import type { BaseResponse } from "@/utils/request";
import { request } from "@/utils/request";
export function login(data: API.LoginParams) {
  return request<BaseResponse<API.LoginResult>>(
    {
      url: "login",
      method: "post",
      data,
    }
  );
}

export function getImageCaptcha(params?:API.CaptchaParams) {
  return request<API.CaptchaResult>({
    url: 'captcha/img',
    method: 'get',
    params
  })
}
