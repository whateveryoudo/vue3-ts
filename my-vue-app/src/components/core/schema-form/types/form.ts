/*
 * @Author: ykx
 * @Date: 2022-10-17 11:47:24
 * @LastEditTime: 2022-10-21 15:16:46
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\components\core\schema-form\types\form.ts
 */
import type { VNode, Component } from "vue";
import type { ComponentMapType, ColEx, ComponentProps } from "./component";
type GetFieldKeys<T> = Exclude<keyof T, symbol | number>;

interface RenderCallbackParams<T = string> {}
export type CustomRenderFn<T = any> = (
  renderCallbackParams: RenderCallbackParams<T>
) => VNode | VNode[] | string;
export interface FormSchema<T = string> {
  field: T extends string ? string : GetFieldKeys<T>;
  label?: string;
  helpMessage?: string;
  subLabel?: string;
  componentSlots?:
    | ((
        renderCallbackParams: RenderCallbackParams<T>
      ) => Recordable<CustomRenderFn<T>>)
    | Recordable<CustomRenderFn<T>>
    | ReturnType<CustomRenderFn>; // 函数返回类型
  component?:
    | ComponentMapType
    | CustomRenderFn<T>
    | ((opt: RenderCallbackParams<T>) => Component);
  colProps?: Partial<ColEx>;
  componentProps?:
    | ComponentProps
    | {
        (opt: RenderCallbackParams<T>): ComponentProps;
      };
}
