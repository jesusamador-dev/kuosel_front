<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable max-len -->
<template>
  <section class="w-full max-h-14">
    <div class="grid grid-cols-5 gap-4 px-2 py-4">
      <div class="col-span-1 flex justify-center items-center">
        <svg
          viewBox="0 0 24 24"
          class="w-10 h-10 text-gray-500"
          style="max-height: 30px"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M7 18V17C7 14.2386 9.23858 12 12 12V12C14.7614 12 17 14.2386 17 17V18"
              stroke="currentColor"
              stroke-width=".5"
              stroke-linecap="round"
            ></path>
            <path
              d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
              stroke="currentColor"
              stroke-width=".5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width=".5"></circle>
          </g>
        </svg>
      </div>
      <div class="col-span-3 text-center flex justify-center items-center">
        <h3 class="font-bold text-slate-700 leading-snug">{{ currentRouteName }}</h3>
      </div>
      <div class="col-span-1 flex justify-center items-center">
        <svg
          viewBox="0 0 16 16"
          class="w-10 h-10 text-gray-500"
          style="max-height: 23px"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
  computed: {
    currentRouteName() {
      return this.$route.meta.title;
    },
  },
});
</script>

<style scoped></style>
