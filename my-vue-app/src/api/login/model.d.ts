/*
 * @Author: ykx
 * @Date: 2022-04-21 20:02:29
 * @LastEditTime: 2022-04-22 10:38:02
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\api\login\model.d.ts
 */
declare namespace API {
  type LoginParams = {
    username: string;
    password: string;
    verifyCode: string;
  };
  type LoginResult = {
    token: string
  }
  type CaptchaParams = {
    width?: number;
    height?: number;
  }
  type CaptchaResult = {
    img: string
  }
}
