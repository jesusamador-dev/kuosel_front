<template>
  <button
    class="text-sm text-slate-600 px-3 py-2"
    :class="{ tab__active: active }"
    @click="$emit('changeTab', name)"
  >
    {{ title }}
  </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    active: {
      required: false,
      type: Boolean,
    },
  },
  setup() {
    return {};
  },
  methods: {},
});
</script>

<style scoped></style>
