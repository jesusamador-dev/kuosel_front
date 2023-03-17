<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <transactions-group
    v-for="(transaction, index) in transactionsGroups"
    :key="index"
    :transactions="transaction.transactions"
    :date="transaction.date"
  ></transactions-group>
</template>

<script setup>
import TransactionsGroup from './TransactionsGroup.vue';

const transactionsGroups = [
  {
    date: 'Hoy',
    transactions: [
      {
        amount: '$290.98',
        title: 'Tacos',
        categoryName: 'Restaurantes',
      },
      {
        amount: '$290.98',
        title: 'Netflix',
        categoryName: 'Entretenimiento',
      },
      {
        amount: '$290.98',
        title: 'Tenis',
        categoryName: 'Ropa',
      },
      {
        amount: '$290.98',
        title: 'Gorditas',
        categoryName: 'Restaurantes',
      },
    ],
  },
  {
    date: 'Ayer',
    transactions: [
      {
        amount: '$290.98',
        title: 'Tacos',
        categoryName: 'Restaurantes',
      },
      {
        amount: '$290.98',
        title: 'Netflix',
        categoryName: 'Entretenimiento',
      },
    ],
  },
  {
    date: 'Marzo 15, 2023',
    transactions: [
      {
        amount: '$290.98',
        title: 'Tacos',
        categoryName: 'Restaurantes',
      },
      {
        amount: '$290.98',
        title: 'Netflix',
        categoryName: 'Entretenimiento',
      },
    ],
  },
];
</script>

<style scoped></style>
