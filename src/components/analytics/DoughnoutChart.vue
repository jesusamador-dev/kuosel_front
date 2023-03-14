<template>
  <DoughnutWithName :data="data" :options="options" />
</template>

<script>
import { defineComponent } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies, object-curly-newline
import { Chart, ArcElement, Tooltip } from 'chart.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import DoughnutWithName from '@/utils/DoughnoutChart';

Chart.register(ArcElement, Tooltip);
export default defineComponent({
  components: {
    DoughnutWithName,
  },
  data() {
    return {
      data: {
        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [40, 20, 80, 10],
            lineWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: 110,
        text: '$999,999,999,999,999',
      },
    };
  },
});
</script>

<style lang="scss" scoped></style>
