<template>
  <div style="min-height:765px;">
    <a-card class="card" title="智能分析" :bordered="false" style="width: 100% ;min-height: 600px; border-radius: 12px;">
      <a-form :form="form" labelAlign="left" :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }" @submit="handleSubmit">
        <a-form-item label="分析目标">
          <a-textarea v-decorator="[
            'target',
            {
              rules: [{ required: true, message: '输入分析目标！' }],
              initialValue: ' ',
            },
          ]" />
        </a-form-item>
        <a-form-item label="图表名称">
          <a-input v-decorator="[
            'chartName',
            {
              rules: [{ required: true, message: '输入图标名称！' }],
              initialValue: ' ',
            },

          ]"></a-input>
        </a-form-item>
        <a-form-item label="图表类型">
          <a-select v-decorator="[
            'chartType',
            { rules: [{ required: true, message: '输入图标名称！' }] },

          ]">
            <a-select-option value="条形图" selected> 条形图 </a-select-option>
            <a-select-option value="折线图"> 折线图 </a-select-option>
            <a-select-option value="圆饼图">圆饼图</a-select-option>
            <a-select-option value="散点图"> 散点图 </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="原始数据">
          <a-upload name="file" :multiple="true" action="http://114.132.124.179:9898/common/upload" @change="handleChange"
            :default-file-list="defaultFileList"
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
  </div>
</template>

<script>
import { reqChartData } from "@/api";
import { message } from "ant-design-vue";
export default {
  name: "AnalysisAsync",
  data() {
    return {
      form: this.$form.createForm(this),
      defaultFileList: [],
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          const xslData = values.files.fileList[0].originFileObj;

          const formdata = new FormData();
          formdata.append("file", xslData);
          formdata.append("chartType", values.chartType);
          formdata.append("goal", values.target);
          formdata.append("name", values.chartName);
          console.log(formdata);

          message.info('请求发起成功请前往我的图表查看！')
          reqChartData(formdata).then((res) => {
            console.log("res", res);
          },
            (err) => {
              this.$message.info('请求失败：' + err);
            }
          );
        }
      });
    },
    handleChange(e) {
      console.log("c", e);
    },
  },
};
</script>

<style></style>