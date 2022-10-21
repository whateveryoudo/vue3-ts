import { inject, provide } from "vue";

/*
 * @Author: ykx
 * @Date: 2022-10-21 15:59:19
 * @LastEditTime: 2022-10-21 16:56:12
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \my-vue-app\src\components\core\schema-form\src\hooks\useFormContext.ts
 */
const key = Symbol('schame-form');
export function createFormContext(instance){
    provide(key, instance)
}
export function useFormContext(defaultForm = {}) {
    return inject(key, defaultForm)
}