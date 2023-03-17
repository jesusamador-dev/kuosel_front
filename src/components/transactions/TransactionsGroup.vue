<template>
  <h4 class="text-sm font-medium text-slate-800 mb-0">{{ date }}</h4>
  <ul class="flex flex-col mb-3">
    <transaction-item
      v-for="(transaction, index) in transactions"
      :key="index"
      :transaction="transaction"
    ></transaction-item>
  </ul>
</template>

<script setup>
import TransactionItem from './TransactionItem.vue';
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  transactions: Array,
  date: String,
});

console.log(props);
</script>

<style scoped></style>
