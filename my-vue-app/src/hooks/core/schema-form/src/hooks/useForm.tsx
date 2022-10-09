/*
 * @Author: ykx
 * @Date: 2022-10-08 16:45:39
 * @LastEditTime: 2022-10-08 16:54:43
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \my-vue-app\src\hooks\core\schema-form\src\hooks\useForm.tsx
 */
import SchemaForm from '../../index';
export function useForm () {

    const SchemaFormRender = () => {
        return (<SchemaForm/>)
    }

    return [SchemaFormRender] as const;
}