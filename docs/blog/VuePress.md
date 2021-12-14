# VuePress

VuePress是基于`markdown`的静态网站构建框架

## 相关链接

* [VuePress](https://v1.vuepress.vuejs.org/zh/)

## 本站的构建

1. 创建`vuepress`项目

```shell
yarn init
yarn add -D vuepress
```

2. 在`package.json`中添加如下脚本

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

3. 参考[vuepress官方文档](https://v1.vuepress.vuejs.org/zh/guide/getting-started.html)构建目录结构
