/*
 * @Author: ykx
 * @Date: 2022-10-17 14:59:02
 * @LastEditTime: 2022-10-20 09:54:09
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\components\core\schema-form\componentMap.ts
 */
import {
  Input,
  Divider,
  RangePicker,
  AutoComplete,
  Select,
  Cascader,
  Checkbox,
  CheckboxGroup,
  Switch,
  TreeSelect,
} from "ant-design-vue";
const componentMap = {
  Input,
  Divider,
  RangePicker,
  AutoComplete,
  Select,
  Cascader,
  Checkbox,
  CheckboxGroup,
  Switch,
  TreeSelect,
};
export { componentMap };
export type ComponentMapType = keyof typeof componentMap;
