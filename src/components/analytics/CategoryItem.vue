<!-- eslint-disable max-len -->
<template>
  <li
    class="inline-flex items-center justify-between py-2 px-4 text-sm font-medium bg-white text-gray-800"
  >
    <span class="flex items-center gap-x-3.5">
      <span class="flex justify-center items-center p-1 bg-red-400 text-white rounded-md">
        <svg class="flex-none" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path
            d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
          />
        </svg>
      </span>
      <div class="flex flex-col">
        <p class="text-md text-slate-700 mb-1">{{ name }}</p>
        <span class="text-xs text-gray-400">{{ quantityOpertations }} operaciones</span>
      </div>
    </span>
    <span class="text-md tracking-wide font-bold text-slate-800"> {{ amount }} </span>
  </li>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  name: String,
  quantityOpertations: String,
  amount: String,
});
</script>

<style lang="scss" scoped></style>
