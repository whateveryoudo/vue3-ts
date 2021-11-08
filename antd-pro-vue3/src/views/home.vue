<template>
  <div>{{ readersNumber }} {{ book.title }}</div>
  <my-map></my-map>
</template>

<script>
import { ref, reactive } from "vue";
import MyMap from '@/components/MyMap.vue';
export default {
  components: {
    MyMap
  },
  setup() {
    const readersNumber = ref(0);
    const book = reactive({ title: "Vue 3 Guide" });

    // expose to template
    return {
      readersNumber,
      book,
    };
  },
};
</script>