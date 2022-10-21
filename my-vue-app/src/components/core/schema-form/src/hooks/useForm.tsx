/*
 * @Author: ykx
 * @Date: 2022-10-08 16:45:39
 * @LastEditTime: 2022-10-17 14:31:10
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\hooks\core\schema-form\src\hooks\useForm.tsx
 */
import SchemaForm from "../../index";
import type { SchemaFormProps } from "../schema-form";
export function useForm(props?: Partial<SchemaFormProps>) {
  const SchemaFormRender = (compProps: Partial<SchemaFormProps>) => {
    return <SchemaForm {...{ ...compProps, ...props }} />;
  };

  return [SchemaFormRender] as const;
}
