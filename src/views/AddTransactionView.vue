<template>
  <section class="w-full px-3">
    <add></add>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import add from '@/components/transactions/Add.vue';

export default defineComponent({
  name: 'AddTransactionView',
  components: {
    add,
  },
  data() {
    return {};
  },
});
</script>
<style></style>
