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
    const text = `${config.options?.text}`;
    this.widthText = this.widthText === 0 ? ctx.measureText(text).width : this.widthText;
    const fontSize = (((width - 40) / (this.widthText + 50)) * 10).toFixed(0);
    ctx.font = `bold ${fontSize}px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`;
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgb(15 23 42)';

    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = (height / 2) + 15;

    ctx.fillText(text, textX, textY);

    const month = `${config.options?.month}`;
    ctx.font = '16px ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgb(156 163 175)';
    const textMonthX = Math.round((width - ctx.measureText(month).width) / 2);
    ctx.fillText(month, textMonthX, textY - 30);

    // const { stroke } = ctx;
    // ctx.stroke = () => {
    //   ctx.save();
    //   ctx.shadowColor = 'rgba(0,0,0,1)';
    //   ctx.shadowBlur = 10;
    //   ctx.shadowOffsetX = 0;
    //   ctx.shadowOffsetY = 10;
    //   stroke.apply(ctx);
    //   ctx.restore();
    // };
  }
}

const DoughnutWithName = createTypedChart(
  'doughnut-with-name',
  DoughnutTextInsideController,
);

export default DoughnutWithName;
