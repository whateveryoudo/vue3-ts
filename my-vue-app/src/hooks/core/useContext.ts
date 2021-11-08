/*
 * @Author: ykx
 * @Date: 2021-05-12 17:36:59
 * @LastEditTime: 2021-05-12 17:52:01
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\hooks\core\useContext.ts
 */
import { InjectionKey, UnwrapRef, inject, reactive, readonly as defineReadonly, provide } from "vue";
type ShallowUnwrap<T> = {
  [P in keyof T]: UnwrapRef<T[P]>;
};
interface CreateContextOptions {
    readonly?: boolean;
    createProvider?: boolean;
    native?: boolean;
}
export function createContext<T>(
    context: any,
    key: InjectionKey<T> = Symbol(),
    options: CreateContextOptions = {}
){
    const { readonly = true, createProvider = false, native = false} = options
    const state = reactive(context);
    const provideData = readonly ? defineReadonly(state) : state;
    !createProvider && provide(key, native ? context : provideData);
    return {
        state
    }
}
export function useContext<T>(
  key: InjectionKey<T> = Symbol(),
  defaultValue?: any
): ShallowUnwrap<T> {
  return inject(key, defaultValue || {});
}
