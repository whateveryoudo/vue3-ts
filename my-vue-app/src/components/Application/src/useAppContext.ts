/*
 * @Author: ykx
 * @Date: 2021-05-12 17:09:04
 * @LastEditTime: 2021-05-12 17:57:09
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \my-vue-app\src\components\Application\src\useAppContext.ts
 */
import { InjectionKey, Ref } from 'vue'
import { createContext } from '@/hooks/core/useContext'
export interface AppProviderContextProps{
    prefixCls: Ref<string>;
}
const key: InjectionKey<AppProviderContextProps> = Symbol();
export function createAppProviderContext (context:AppProviderContextProps) {
    return createContext<AppProviderContextProps>(context, key);
}