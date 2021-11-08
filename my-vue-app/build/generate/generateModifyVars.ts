/*
 * @Author: ykx
 * @Date: 2021-05-12 11:30:23
 * @LastEditTime: 2021-05-12 11:48:03
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \my-vue-app\build\generate\generateModifyVars.ts
 */
import { resolve } from 'path'
export function generateModifyVars () {
    return {
        'hack': `true;@import (reference) "${resolve('src/design/config.less')}";`
    }
}