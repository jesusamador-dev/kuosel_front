<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="overflow-hidden">
    <TopMenu />
    <section class="relative w-full mb-20 bg-white border-t border-gray-100">
      <router-view v-slot="{ Component, route }">
        <transition
          enter-active-class="animate__animated animate__fadeInUp"
          leave-active-class="animate__animated animate__fadeOutDown"
          mode="out-in"
        >
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </section>
    <BottomMenu />
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import TopMenu from '@/components/TopMenu.vue';
import BottomMenu from '@/components/BottomMenu.vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'animate.css';

export default defineComponent({
  components: {
    TopMenu,
    BottomMenu,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
