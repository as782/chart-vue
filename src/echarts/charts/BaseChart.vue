<template>
  <div
    ref="container"
    class="base-echart"
    :style="{ width:  '100%', height: '100%' }"
  ></div>
</template>

<script>
//引入echarts
import * as echarts from "echarts";
export default {
  name: "BaseChart",
  props: ["options"],
  mounted() {
    console.log("basechart开始", this);
    this.initChart();
  },
  beforeDestroy(){
    console.log('图表销毁了');
  },
  data() {
    return {
      chart: null,
    };
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.container);
      this.chart.setOption(this.options,{notMerge:true});
    },
  },
};
</script>

<style>
</style>