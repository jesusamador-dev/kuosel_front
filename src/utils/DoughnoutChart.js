/* eslint-disable import/no-extraneous-dependencies */
import { createTypedChart } from 'vue-chartjs';
import { DoughnutController } from 'chart.js';

class DoughnutTextInsideController extends DoughnutController {
  static id = 'doughnut-with-name';

  widthText = 0;

  draw() {
    super.draw();
    const {
      width, height, config, ctx,
    } = this.chart;
    const text = config.options?.text;
    this.widthText = this.widthText === 0 ? ctx.measureText(text).width : this.widthText;

    const fontSize = ((width / (this.widthText + 50)) * 10).toFixed(0);
    console.log(ctx.measureText(text));
    console.log(fontSize);
    console.log(text);
    ctx.font = `${fontSize}px sans-serif`;
    ctx.textBaseline = 'middle';

    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2;

    ctx.fillText(text, textX, textY);
  }
}

const DoughnutWithName = createTypedChart(
  'doughnut-with-name',
  DoughnutTextInsideController,
);

export default DoughnutWithName;
