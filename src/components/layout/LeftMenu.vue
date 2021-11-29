<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    router
  >
    <el-menu-item
      v-for="menu in menuList"
      :index="menu.path"
      :key="menu.name"
    >
      <span>
        {{ menu.name }}
      </span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'LeftMenu',
  data () {
    return {
      menuList: [
        {
          path: '/blog',
          name: '博客'
        },
        {
          path: '/project',
          name: '开源项目'
        },
        {
          path: '/research',
          name: '研究方向'
        },
        {
          path: '/about',
          name: '关于'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
