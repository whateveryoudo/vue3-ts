/*
 * @Author: ykx
 * @Date: 2022-04-29 10:14:59
 * @LastEditTime: 2022-04-29 10:16:14
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \my-vue-app\src\utils\index.ts
 */
export function isUrl(path: string):boolean {
    const rge = /(((^https?:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
    return rge.test(path);
}