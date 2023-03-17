<template>
  <section>
    <tabs class="my-6" :tabs="tabs"></tabs>
    <section class="flex justify-center">
      <tab-panel name="estadisticas" class="w-full px-3">
        <analytics></analytics>
      </tab-panel>
      <tab-panel name="movimientos" class="w-full px-3">
        <transactions></transactions>
      </tab-panel>
    </section>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import Tabs from '@/components/tabs/Tabs.vue';
import TabPanel from '@/components/tabs/TabPanel.vue';
import Analytics from '@/components/analytics/Analytics.vue';
import Transactions from '@/components/transactions/index.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Tabs,
    TabPanel,
    Analytics,
    Transactions,
  },
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
