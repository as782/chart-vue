<template>
  <div class="pagia">
    <a-pagination
      v-model="current"
      :page-size-options="pageSizeOptions"
      :total="tt"
      show-size-changer
      :page-size="pageSize"
      @showSizeChange="onShowSizeChange"
    >
      <template slot="buildOptionText" slot-scope="props">
        <span v-if="props.value !== tt">{{ props.value }}条/页</span>
        <span v-if="props.value === tt">全部</span>
      </template>
    </a-pagination>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  props:['tt'],
  data() {
    return {
      pageSizeOptions: ["4", "6", "8", "10", "50"],
      current: 1,
      pageSize: 4,
      
    };
  },
  methods: {
    onShowSizeChange(current, pageSize) {
      this.pageSize = pageSize;
      console.log(current,pageSize);
      this.$emit('getPageData',current,pageSize);
    },
  },
  watch:{
    current:function(current,oldv){
        console.log("改变页数，和当前页数",current,this.pageSize);
        this.$emit('getPageData',current,this.pageSize);
    }
  }
};
</script>

<style scoped>
.pagia {
  width: 80%;
  text-align: center;
  margin: 0px auto;
}
</style>