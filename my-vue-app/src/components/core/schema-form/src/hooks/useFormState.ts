/*
 * @Author: ykx
 * @Date: 2022-10-17 10:31:15
 * @LastEditTime: 2022-10-17 12:07:35
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \my-vue-app\src\hooks\core\schema-form\src\hooks\useFormState.ts
 */
import { DefineComponent, SetupContext, computed, unref } from 'vue'
import { ref, reactive} from 'vue'
import { SchemaFormProps } from '../schema-form'
import type { FormInstance } from 'ant-design-vue';
import { cloneDeep } from 'lodash-es'
export type useFormStateParams = {
    props: SchemaFormProps,
    attrs: SetupContext['attrs']
}
export const useFormState = ({ props, attrs}: useFormStateParams ) => {
    const formPropsRef = ref<SchemaFormProps>(cloneDeep(props));
    const formModel = reactive({...props.initialValues})
    const schemaFormRef = ref<FormInstance>();
    const cacheModel = {...props.initialValues};
    const compRefMap = new Map<string, DefineComponent<any>>();


    return {
        formSchemasRef: computed(() => unref(formPropsRef).schemas || [])
    }
}