<template>
  <a-row style="min-height: 765px;">
    <a-col :span="12">
      <a-card class="card" title="智能分析" :bordered="true" style="width: 750px; border-radius: 12px;">
        <a-form :form="form" labelAlign="left" :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }"
          @submit="handleSubmit">
          <a-form-item label="分析目标">
            <a-textarea v-decorator="[
              'target',
              {
                rules: [{ required: true, message: '输入分析目标！' }],
                initialValue: '',
              },
            ]" />
          </a-form-item>
          <a-form-item label="图表名称">
            <a-input v-decorator="[
              'chartName',
              {
                rules: [{ required: true, message: '输入图标名称！' }],
                initialValue: '',
              },
            ]"></a-input>
          </a-form-item>
          <a-form-item label="图表类型">
            <a-select v-decorator="[
              'chartType',
              { rules: [{ required: true, message: '输入图标名称！' }] },
            ]">
              <a-select-option value="条形图" selected>
                条形图
              </a-select-option>
              <a-select-option value="折线图"> 折线图 </a-select-option>
              <a-select-option value="饼图">饼图</a-select-option>
              <a-select-option value="散点图"> 散点图 </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="原始数据">
            <a-upload name="file" :multiple="true" action="http://114.132.124.179:9898/common/upload"
              @change="handleChange" :default-file-list="defaultFileList"
              v-decorator="['files', { rules: [{ required: true, message: '请上传表格！' }] }]">
              <a-button> <a-icon type="upload" />上传Excel文件</a-button>
            </a-upload>
          </a-form-item>

          <a-form-item :wrapper-col="{ span: 12, offset: 4 }">
            <a-button type="primary" html-type="submit"> 提交 </a-button>
            <a-button html-type="reset" style="margin: 0 10px"> 重置 </a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </a-col>
    <a-col :span="12">
      <div style="display: flex; flex-direction: column">
        <a-card class="card" title="分析结论" :bordered="true" style="width: 750px; margin: 0 0 50px 0; border-radius: 12px;">
          <p  >
            {{ text }}
          </p>
          
        </a-card>

        <a-card class="card" title="可视化图表" :bordered="true" style="width: 750px; height: 428px; border-radius: 12px;"
          :headStyle="{ height: '20%' }" :bodyStyle="{ height: '80%' }">
          <div class="ppp" style="width: 650px; height: 400px;" v-for="option in data" :key="index">
            <BaseChartVue v-if="!isLoading" :options="option" />

          </div>
        </a-card>
      </div>
    </a-col>
  </a-row>
</template>

<script>
import BaseChartVue from "@/echarts/charts/BaseChart.vue";

import { message } from "ant-design-vue";

export default {
  name: "AnalysisForAi",
  components: {
    BaseChartVue,
  },
  mounted() { },
  data() {
    return {

      form: this.$form.createForm(this),
      defaultFileList: [],
      text: ""
      ,
      data: [],
      isLoading: false
    };
  },
  methods: {
    handleSubmit(e) {

      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          const xslData = values.files.fileList[0].originFileObj;

          const formdata = new FormData();
          formdata.append("file", xslData);
          formdata.append("chartType", values.chartType);
          formdata.append("goal", values.target);
          formdata.append("name", values.chartName);
          console.log(formdata);
          try {
            message.info('开始分析数据！');
            let result = await this.$store.dispatch('singlechart/getSingleChartData', formdata);
            if (result.code === 200) {
              let option = this.$store.state.singlechart.chartdata;

              console.log("op:", option);
              this.text = option.genResult;
              console.log("s", JSON.parse(option.genChart.toString()));
              this.data.push(JSON.parse(option.genChart.toString()));

              let isLoading = this.$store.state.singlechart.isLoading;
            }
          } catch (error) {
            message.error(error);
          }

        }
      });
    },

    handleChange(e) {
      console.log("c", e);
    },
  },
};
</script>

<style>
.ppp {
  position: absolute;
  top: 40px;
  left: 60px;
}

.example {
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
}
</style>