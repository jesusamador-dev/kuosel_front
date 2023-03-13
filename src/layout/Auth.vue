<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="overflow-hidden">
    <section class="relative w-full h-full py-40 min-h-screen">
      <div
        class="absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-full"
        :style="`background-image: url(/assets/img/bg_auth.svg)`"
      ></div>
      <div class="container mx-auto px-4 h-full">
        <div class="flex items-center justify-center h-full">
          <router-view v-slot="{ Component, route }">
            <transition
              enter-active-class="animate__animated animate__fadeInUp"
              leave-active-class="animate__animated animate__fadeOutDown"
              mode="out-in"
            >
              <component :is="Component" :key="route.path" />
            </transition>
          </router-view>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { defineComponent } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'animate.css';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
