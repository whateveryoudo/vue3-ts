/*
 * @Author: ykx
 * @Date: 2022-10-08 16:43:46
 * @LastEditTime: 2022-10-17 14:49:06
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \my-vue-app\src\components\core\schema-form\index.ts
 */
import SchemaForm from './src/schema-form.vue'
import type { DefineComponent } from 'vue'
export * from './src/hooks'
export * from './types';
// import type { SchemaFormProps } from './src/schema-form'
export default SchemaForm as unknown as DefineComponent<Partial<any>>
