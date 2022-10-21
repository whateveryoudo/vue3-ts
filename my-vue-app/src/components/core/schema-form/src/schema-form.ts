/*
 * @Author: ykx
 * @Date: 2022-10-08 16:50:59
 * @LastEditTime: 2022-10-17 15:14:31
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\components\core\schema-form\src\schema-form.ts
 */
import { formProps } from "ant-design-vue/es/form";
import { ExtractPropTypes, PropType } from "vue";
import { FormSchema } from "../types/form";
export const schemaFormProps = {
  ...formProps(),
  initialValues: {
    type: Object as PropType<Recordable>,
    default: () => {}
  },
  schemas: {
    type : [Array] as PropType<FormSchema[]>,
    default: () => []
  }
};

export type SchemaFormProps<T = any> = Partial<
  ExtractPropTypes<typeof schemaFormProps> & {
    schemas: FormSchema<T>[];
  }
>;
