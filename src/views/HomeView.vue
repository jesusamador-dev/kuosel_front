<template>
  <section>
    <tabs class="my-6" :tabs="tabs"></tabs>
    <section class="flex justify-center">
      <Transition
        enter-active-class="animate__animated animate__slideInLeft"
        leave-active-class="animate__animated animate__slideOutLeft"
        mode="out-in"
      >
        <tab-panel name="estadisticas">
          <analytics></analytics>
        </tab-panel>
      </Transition>
      <Transition
        enter-active-class="animate__animated animate__slideInRight"
        leave-active-class="animate__animated animate__slideOutRight"
        mode="out-in"
      >
        <tab-panel name="movimientos">
          <h2>movimientos</h2>
        </tab-panel>
      </Transition>
    </section>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import Tabs from '@/components/tabs/Tabs.vue';
import TabPanel from '@/components/tabs/TabPanel.vue';
import Analytics from '@/components/analytics/Analytics.vue';

export default defineComponent({
  name: 'HomeView',
  components: { Tabs, TabPanel, Analytics },
  data() {
    return {
      tabs: [
        {
          name: 'estadisticas',
          title: 'Estadísticas',
          active: true,
        },
        {
          name: 'movimientos',
          title: 'Movimientos',
          active: false,
        },
      ],
    };
  },
});
</script>
<style>
.slide-enter-active {
  transition: all 0.5s ease;
}
.slide-leave-active {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
