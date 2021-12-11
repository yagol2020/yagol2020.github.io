<template>
  <el-row>
    <el-col v-for="o in 6" :key="o">
      <el-card
        class="box-card"
        :body-style="{
          padding: '30px',
        }"
      >
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >操作按钮</el-button
          >
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>