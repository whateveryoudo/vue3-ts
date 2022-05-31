<template>
  <i18n-t tag="span" :keypath="getTitle" scope="global"></i18n-t>
</template>

<script setup lang="ts">
import { type PropType, computed } from "vue";
import { ref } from "@vue/reactivity";
import { useLocaleStore } from "@/store/modules/locale";
const props = defineProps({
  title: {
    type: [String, Object] as PropType<string | Title18n>,
    default: "",
    required: true,
  },
});
const localeStore = useLocaleStore();
const getTitle = computed(() => {
  const { title = "" } = props;
  if (title instanceof Object) {
    return title?.[localeStore.locale] ?? title;
  }
  return title;
});
</script>

<style scoped></style>
