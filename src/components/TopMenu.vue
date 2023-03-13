<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable max-len -->
<template>
  <section class="w-full max-h-14">
    <div class="grid grid-cols-5 gap-4 px-2 py-4">
      <div class="col-span-1 flex justify-center items-center">
        <svg
          viewBox="0 0 24 24"
          class="text-gray-500 max-h-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
      <div class="col-span-1">
        <svg
          viewBox="0 0 24 24"
          class="text-gray-500 max-h-8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M12.0196 2.91016C8.7096 2.91016 6.0196 5.60016 6.0196 8.91016V11.8002C6.0196 12.4102 5.7596 13.3402 5.4496 13.8602L4.2996 15.7702C3.5896 16.9502 4.0796 18.2602 5.3796 18.7002C9.6896 20.1402 14.3396 20.1402 18.6496 18.7002C19.8596 18.3002 20.3896 16.8702 19.7296 15.7702L18.5796 13.8602C18.2796 13.3402 18.0196 12.4102 18.0196 11.8002V8.91016C18.0196 5.61016 15.3196 2.91016 12.0196 2.91016Z"
              stroke="currentColor"
              stroke-width=".5"
              stroke-miterlimit="10"
              stroke-linecap="round"
            ></path>
            <path
              d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z"
              stroke="currentColor"
              stroke-width=".5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              opacity="0.4"
              d="M15.0195 19.0601C15.0195 20.7101 13.6695 22.0601 12.0195 22.0601C11.1995 22.0601 10.4395 21.7201 9.89953 21.1801C9.35953 20.6401 9.01953 19.8801 9.01953 19.0601"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-miterlimit="10"
            ></path>
          </g>
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
