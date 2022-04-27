/*
 * @Author: ykx
 * @Date: 2022-04-20 11:40:50
 * @LastEditTime: 2022-04-27 09:58:20
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
    },
    { isGetDataDirectly: false }
  );
}

export function getImageCaptcha(params?: API.CaptchaParams) {
  return request<API.CaptchaResult>({
    url: "captcha/img",
    method: "get",
    params,
  });
}
