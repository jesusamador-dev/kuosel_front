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
            backgroundColor: this.getGradiants,
            data: [40, 20, 10, 100],
            borderColor: '#fff',
            borderWidth: 0.5,
          },
        ],
      },
      options: {
        responsive: false,
        layout: {
          padding: 20,
        },
        maintainAspectRatio: false,
        cutout: 90,
        text: '$999,999.98',
        month: 'Marzo',
        plugins: {
          tooltip: {
            usePointStyle: false,
            backgroundColor: 'rgb(243 244 246 / 1)',
            titleColor: 'rgb(15 23 42)',
            callbacks: {
              labelTextColor() {
                return 'rgb(15 23 42)';
              },
              label: (context) => {
                const { dataIndex, dataset } = context;
                return ` $${dataset.data[dataIndex]}`;
              },
            },
          },
        },
      },
    };
  },
  methods: {
    getGradiants(context) {
      const { ctx } = context.chart;
      const canvas = context.chart;
      const gradientColors = [
        {
          start: '#FDC830',
          end: '#F37335',
        },
        {
          start: '#636363',
          end: '#a2ab58',
        },
        {
          start: '#0575E6',
          end: '#021B79',
        },
        {
          start: '#36D1DC',
          end: '#5B86E5',
        },
      ];

      const gradients = [];

      gradientColors.forEach((item) => {
        const gradient = ctx.createRadialGradient(
          canvas.width / 2,
          canvas.height / 2,
          60,
          canvas.width / 2,
          canvas.height / 2,
          Math.max(canvas.width, canvas.height) / 2,
        );
        gradient.addColorStop(0, item.start);
        gradient.addColorStop(1, item.end);
        gradients.push(gradient);
      });

      return gradients;
    },
  },
});
</script>

<style lang="scss" scoped></style>
