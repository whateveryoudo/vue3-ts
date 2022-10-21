/*
 * @Author: ykx
 * @Date: 2022-10-17 14:58:30
 * @LastEditTime: 2022-10-20 11:31:59
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\components\core\schema-form\types\component.ts
 */
import type { InputProps } from "ant-design-vue";
export type { ComponentMapType } from "../componentMap";
type ColSpanType = number | string;
export interface ColEx {
  style?: any;
  span?: ColSpanType;
  order?: ColSpanType;
  flex?: ColSpanType;
  offset?: ColSpanType;

  push?: ColSpanType;
  pull?: ColSpanType;
  xs?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;
  sm?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;
  md?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;
  lg?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;
  xl?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;
  xxl?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;
}
export type ComponentProps = InputProps & { [key: string]: any };
