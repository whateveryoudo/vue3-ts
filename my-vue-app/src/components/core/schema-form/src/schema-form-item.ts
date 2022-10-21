/*
 * @Author: ykx
 * @Date: 2022-10-17 15:17:58
 * @LastEditTime: 2022-10-19 15:28:54
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\components\core\schema-form\src\schema-form-item.ts
 */
import type { FormSchema } from '../types';
export const schemaFormItemProps = {
  schema: {
    type: Object as PropType<FormSchema>,
    default: () => {}
  },
};
