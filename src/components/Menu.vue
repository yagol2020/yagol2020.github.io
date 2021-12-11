<template>
  <div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :router="true"
    >
      <el-menu-item index="1" route="blog">
        <i class="el-icon-receiving"></i>
        <span slot="title">博客</span>
      </el-menu-item>
      <el-menu-item index="2" route="smartcontract">
        <i class="el-icon-document"></i>
        <span slot="title">智能合约</span>
      </el-menu-item>
      <el-menu-item index="3" route="project">
        <i class="el-icon-folder-checked"></i>
        <span slot="title">开源项目</span>
      </el-menu-item>
      <el-menu-item index="4" route="about">
        <i class="el-icon-headset"></i>
        <span slot="title">关于</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  name: "Menu",
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>