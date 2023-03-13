<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-show="name === tabShow">
    <slot></slot>
  </div>
</template>

<script>
import { useTabsStore } from '@/store/tabsStore';
import { defineComponent } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mapState } from 'pinia';

export default defineComponent({
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  setup() {
    const store = useTabsStore();
    return {
      store,
    };
  },
  computed: {
    ...mapState(useTabsStore, ['tabShow']),
  },
});
</script>

<style scoped></style>
