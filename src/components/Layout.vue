<template>
  <el-container>
    <el-header>Yagol's GitHub Page</el-header>
    <el-container>
      <el-aside><my-menu></my-menu></el-aside>
      <el-container>
        <el-main
          ><div>
            <keep-alive>
              <component :is="currentView"></component>
            </keep-alive></div
        ></el-main>
        <el-footer><my-footer></my-footer></el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Menu from "./Menu.vue";
import Footer from "./Footer.vue";
import Blog from "./Blog.vue";
export default {
  components: {
    "my-menu": Menu,
    "my-footer": Footer,
    blog: () => import("./Blog.vue"),
    smartcontract: () => import("./SmartContract.vue"),
    project: () => import("./Project.vue"),
    about: () => import("./About.vue"),
  },
  name: "Blog",
  data() {
    return {
      currentView: "blog",
    };
  },
  watch: {
    "$route.query": function (newVal, oldVal) {
      this.currentView = newVal.choose;
    },
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
