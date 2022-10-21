/*
 * @Author: ykx
 * @Date: 2022-10-19 15:52:52
 * @LastEditTime: 2022-10-20 09:56:53
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\components\core\schema-form\src\helper.ts
 */
import { ComponentMapType } from "../componentMap";
import { useI18n } from "@/hooks/useI18n";
export const createPlaceholderMessage = (
  component: ComponentMapType,
  label: string
) => {
  const { t } = useI18n();
  if (["Input", "Complete"].includes(component)) {
    return `${t("common.inputText")}${label}`;
  }
  const chooseTypes: ComponentMapType[] = [
    "Select",
    "Cascader",
    "Checkbox",
    "CheckboxGroup",
    "Switch",
    "TreeSelect",
  ];
  if (component.includes('Picker') || chooseTypes.includes(component)) {
    return `${t('common.chooseText')}${label}`
  }
  return ''
};
