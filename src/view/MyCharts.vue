<template>
  <div>
  
    <div class="chart-content">
      <ul class="chart-wrap">
        <li class="chart-item card" v-for="item in data" :key="item.id">
          <h2>{{ item.title }}</h2>
          <h4>图表类型：{{ item.chartType }}</h4>
          <hr>
          <BaseChartVue v-if="!item.isLoading" :options="item.option" />
          <a-result v-else title="正在生成图表"></a-result>
        </li>
      </ul>

    </div>
    <div class="pag">
      <Pagination :tt="total" @getPageData="getPageData" />
    </div>
  </div>
</template>

<script>
import BaseChartVue from "@/echarts/charts/BaseChart.vue";
import Pagination from "@/components/Pagination.vue";
import { reqChartPageData } from '@/api/index';
export default {
  name: "MyCharts",
  components: {
    BaseChartVue,
    Pagination,
  },
  mounted() {
    //默认请求第一页，页面大小为四个数据
    this.getPageData(1, 4);
  
  },
  data() {
    return {
      data: [],
      pageSize: 4,
      total: 0,
      current: 1,
      keyword: ''
    };
  },
  methods: {
    onSearch(value) {
      console.log(value);
      this.keyword = value;
      const reg = RegExp(`(?=${value})`);
      // let list = ['超市零售详情','股票增长情况','股票下降情况','超市详情'].filter(e=>{
      //    return reg.exec(e);
      // })
      // console.log(list);
      this.data = this.data.filter(e => {
        return reg.exec(e.title);
      })
    },
    changeSeach(v) {
      console.log(v);
    },
    //获取一页展示多少，展示第几页
    getPageData(current, pageSize) {
      this.pageSize = pageSize;
      this.current = current;
      this.$store.dispatch('mychart/reqChartPageData', { pageSize: pageSize, currentPage: current }).then(res => {
        const chartData = this.$store.state.mychart.currentPageChartList;
        //返回的原始数据
        const newdata = chartData.map((e, i) => {
          console.log(`${i}:`, JSON.parse(e.genChart.toString()));
          e.genChart = JSON.parse(e.genChart.toString());
          return e;
        })
        // 拼装需要的其他数据，和option
        const realdata = newdata.map((e, i) => {
          let opt = { ...e.genChart, legend: { ...e.genChart.legend, left: "right" } };
          let datas = { id: e.id, title: e.name, chartType: e.chartType, isLoading: false, option: opt };
          return datas;
        })

        this.data = realdata;
        this.total = this.$store.state.mychart.total;
      });

    },
  },

};
</script>

<style>
.pag {
  width: 100%;
  margin: 10px auto;
}

.chart-content {
  width: 100%;
  border: 1px solid #f7f7f7;

}

.chart-content .chart-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;

}

.chart-content .chart-wrap .chart-item {
  display: flex;
  flex-direction: column;
  width: 750px;
  height: 450px;
  margin: 10px;
  padding: 10px;

  border-radius: 12px;
  background-color: #fff;

}
</style>