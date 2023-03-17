<!-- eslint-disable max-len -->
<!-- eslint-disable vue/valid-template-root -->
<template>
  <h3 class="text-xl font-medium text-slate-800 mb-2">Categorias</h3>
  <ul class="flex flex-col">
    <category-item
      v-for="(category, index) in categories"
      :key="index"
      :name="category.name"
      :quantityOpertations="category.quantityOpertations"
      :amount="category.amount"
    ></category-item>
  </ul>
</template>

<script>
import { defineComponent } from 'vue';
import CategoryItem from './CategoryItem.vue';

export default defineComponent({
  components: {
    CategoryItem,
  },
  data() {
    return {
      categories: [
        {
          name: 'Supermercado',
          quantityOpertations: '2',
          amount: '$3,890.50',
        },
        {
          name: 'Transporte',
          quantityOpertations: '11',
          amount: '$1,690.50',
        },
        {
          name: 'Compras',
          quantityOpertations: '1',
          amount: '$2,590.50',
        },
        {
          name: 'Compras',
          quantityOpertations: '1',
          amount: '$2,590.50',
        },
        {
          name: 'Compras',
          quantityOpertations: '1',
          amount: '$2,590.50',
        },
        {
          name: 'Compras',
          quantityOpertations: '1',
          amount: '$2,590.50',
        },
        {
          name: 'Compras',
          quantityOpertations: '1',
          amount: '$2,590.50',
        },
        {
          name: 'Compras',
          quantityOpertations: '1',
          amount: '$2,590.50',
        },
      ],
    };
  },
  methods: {},
});
</script>

<style scoped></style>
