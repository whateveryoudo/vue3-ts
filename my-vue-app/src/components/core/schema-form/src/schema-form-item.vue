<!--
 * @Author: ykx
 * @Date: 2022-10-17 14:21:44
 * @LastEditTime: 2022-10-21 15:58:29
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \my-vue-app\src\components\core\schema-form\src\schema-form-item.vue
-->
<template>
  <a-col v-if="getShow.isIfShow" v-show="getShow.isShow">
    <a-divider v-if="schema.component === 'Divider'" v-bind="getComponentProps">
      <component :is="renderLabelHelpMessage"></component>
    </a-divider>
    <a-form-item v-else :label="renderLabelHelpMessage">
      <component
        :is="getComponent"
        v-bind="getComponentProps"
        v-on="getComponentEvents"
      >
        <template
          v-for="(slotFn, slotName) in getComponentSlots"
          #[slotName]="slotData"
          :key="slotName"
        >
          <component
            :is="slotFn?.({ ...getValues, slotData }) ?? slotFn"
            :key="slotName"
          ></component>
        </template>
      </component>
    </a-form-item>
  </a-col>
</template>

<script setup lang="tsx">
import { render, VNode } from "vue";
import { ref, reactive, computed, unref, isVNode, toRefs } from "vue";
import { FormSchema, CustomRenderFn, ComponentProps } from "../types";
import { schemaFormItemProps } from "./schema-form-item";
import { isString, isFunction, isObject, isBoolean } from "@/utils/is";
import { componentMap } from "../componentMap";
import { createPlaceholderMessage } from "./helper";
import { useFormContext } from './hooks/useFormContext'
const props = defineProps(schemaFormItemProps);

const { schema } = toRefs(props);
const getValues = computed(() => {
  return {
    schema: props.schema,
  };
});
const formContext = useFormContext();
const {formPropsRef} = formContext;
const getShow = computed<{isIfShow: boolean, isShow: boolean}>(() => {
  const {vShow, vIf, isAdvanced = false} = unref(schema);
  const {} = unref()
  let isShow = true;
  let isIfShow = true;
  return {
    isIfShow,
    isShow
  }

})
const vnodeFactory = (
  component: FormSchema["componentSlots"] | FormSchema["component"],
  values = unref(getValues)
): any => {
  if (isString(component)) {
    return <>{component}</>;
  }
  if (isVNode(component)) {
    return component;
  }
  if (isFunction(component)) {
    return vnodeFactory((component as CustomRenderFn)(values));
  }
  if (isObject(component)) {
    const comKeys = Object.keys(component);
    if (
      comKeys.some((n) => n.startsWith("_") || ["setup", "render"].includes(n))
    ) {
      return component;
    }

    return comKeys.reduce<Recordable<CustomRenderFn>>((slots, slotName) => {
      slots[slotName] = (...rest: any) =>
        vnodeFactory((component as Recordable<CustomRenderFn>)[slotName], rest);
      return slots;
    }, {});
  }
  return component;
};
const getComponent = computed(() => {
  const component = props.schema.component;
  return isString(component)
    ? componentMap[component] ?? vnodeFactory(component)
    : vnodeFactory(component);
});
const getComponentProps = computed(() => {
  const { schema } = props;
  let { componentProps = {}, label = "", component } = schema;
  if (isFunction(componentProps)) {
    componentProps = componentProps(unref(getValues)) ?? {};
  }
  if (component !== "RangePicker" && isString(component)) {
    componentProps.placeholder ??= createPlaceholderMessage(component, label);
  }
  if (component === "Divider") {
    componentProps = Object.assign({ type: "horizontal" }, componentProps, {
      orientation: "left",
      plain: true,
    });
  }
  return componentProps as Recordable;
});
const getComponentEvents = computed(() => {
  let componentProps = props.schema?.componentProps || {};
  // if(isFunction(componentProps)) {
  //   componentProps = componentProps(unref(getValues)) ?? {};
  // }
  return Object.keys(componentProps).reduce((prev, key) => {
    if (/on([A-Z])/.test(key)) {
      const tempKey = key.replace(/on([A-Z])/, "$1").toLocaleLowerCase();
      prev[tempKey] = (componentProps as ComponentProps)[key];
    }
    return prev;
  }, {} as Recordable);
});
const getComponentSlots = computed<Recordable<CustomRenderFn>>(() => {
  const componentSlots = props.schema.componentSlots ?? {};
  return isString(componentSlots) || isVNode(componentSlots)
    ? {
        default: (...rest: any) => {
          return vnodeFactory(componentSlots, rest);
        },
      }
    : vnodeFactory(componentSlots);
});
const renderLabelHelpMessage = computed(() => {
  const { label, subLabel, helpMessage } = props.schema;
  const renderLabel = subLabel ? null : vnodeFactory(label);
  const getHelpMessage = isFunction(helpMessage)
    ? helpMessage(unref(getValues))
    : helpMessage;
  if (
    !getHelpMessage ||
    (Array.isArray(getHelpMessage) && getHelpMessage.length === 0)
  ) {
    return renderLabel;
  }
  return <span>{renderLabel}</span>;
});
</script>

<style scoped lang="less"></style>
