/*
 * @Author: ykx
 * @Date: 2022-10-17 14:36:10
 * @LastEditTime: 2022-10-21 15:22:01
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\views\demos\form\basic-form\form-schema.tsx
 */
import type { FormSchema } from "@/components/core/schema-form";
export const schemas: FormSchema[] = [
  {
    field: "divider-basic",
    label: "基础字段",
    component: "Divider",
  },
  {
    field: "field1",
    label: "字段1",
    component: "Input",
    colProps: { span: 8 },
    componentProps: () => {
      return {
        placeholder: "测试placeholder",
        onChange: (e: any) => {
          console.log(e);
        },
      };
    },
    componentSlots: {
      prefix: () => "前缀",
      suffix: () => "后缀",
    },
  },
];
