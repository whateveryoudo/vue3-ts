/*
 * @Author: ykx
 * @Date: 2022-05-30 17:13:19
 * @LastEditTime: 2022-07-07 10:01:43
 * @LastEditors: your name
 * @Description:
 * @FilePath: \my-vue-app\src\components\basic\icon-font\icon-font.tsx
 */

import { type PropType, defineComponent, computed, unref, toRefs } from "vue";
import { createFromIconfontCN } from "@ant-design/icons-vue";
let scriptUrls = [`${import.meta.env.BASE_URL}iconfont.js`]; // 默认本地iconfont
// 实例化组件
let MyIconfontComponent = createFromIconfontCN({
  scriptUrl: scriptUrls,
});
export default defineComponent({
  name: "IconFont",
  props: {
    type: {
      type: String as PropType<string>,
      default: "",
    },
    prefix: {
      type: String,
      default: "icon-",
    },
    color: {
      type: String as PropType<string>,
      default: "unset",
    },
    size: {
      type: [String, Number] as PropType<string | number>,
      default: 14,
    },
    scriptUrl: {
      type: String as PropType<string | string[]>,
      default: "",
    },
  },
  setup(props, { attrs }) {
    if (props.scriptUrl) {
      //整合外界传入的地址
      scriptUrls = [...new Set(scriptUrls.concat(props.scriptUrl))];
      MyIconfontComponent = createFromIconfontCN({
        scriptUrl: scriptUrls,
      });
    }
    const wrapStyleObj = computed(() => {
      const { color, size } = props;
      const fontSize = typeof size === "string" ? parseInt(size) : size;
      return {
        fontSize: fontSize + "px",
        color,
      };
    });
    return () => {
      const { type, prefix } = props;
      return (
        <MyIconfontComponent
          type={type.startsWith(prefix) ? type : prefix + type}
          {...attrs}
          style={unref(wrapStyleObj)}
        />
      );
    };
  },
});
