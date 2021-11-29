<template>
  <el-container>
    <el-header>
      <top-header></top-header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <left-menu></left-menu>
      </el-aside>
      <el-container>
        <el-main>
          <component :is="componentActivate"></component>
        </el-main>
        <el-footer>
          <bottom-footer></bottom-footer>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>

import LeftMenu from './layout/LeftMenu'
import TopHeader from './layout/TopHeader'
import BottomFooter from './layout/BottomFooter'

export default {
  name: 'BaseLayout',
  components: {
    BottomFooter,
    TopHeader,
    LeftMenu,
    blog: () => import('./items/Blog.vue'),
    project: () => import('./items/Project'),
    research: () => import('./items/Research'),
    about: () => import('./items/About')
  },
  data () {
    return {
      componentActivate: undefined
    }
  },
  watch: {
    $route () {
      this.initPage()
    }
  },
  created () {
    this.initPage()
  },
  methods: {
    initPage: function () {
      this.componentActivate = this.$route.query.item === undefined ? 'blog' : this.$route.query.item
    }
  }
}
</script>

<style scoped>

</style>
