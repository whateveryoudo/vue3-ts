/*
 * @Author: ykx
 * @Date: 2022-05-30 18:04:53
 * @LastEditTime: 2022-05-31 17:34:16
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \my-vue-app\src\views\dashboard\welcome\Test.tsx
 */
import { ref, unref, defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    info: {
      type: Object
    }
  },
  setup(props) {
    const styleInfo = computed(() => {
      return {
        color: props.info?.color,
      };
    });
    return () => {
      return (<div style={unref(styleInfo)}>测试下</div>)
    };
  },
});
