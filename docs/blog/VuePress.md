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

## element-ui配置与使用

在`enhanceApp.js`中添加如下内容即可将element-ui导入到项目中

```js
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default ({Vue, options, router}) => {
    Vue.use(Element);
};
```

与`Vue`相似，但区别在于书写在`md`文档中，如下是一个`<el-button>`

<el-button>我是按钮！</el-button>

想要实现相关的相应，需要实现`<script>`，下面这个按钮实现了弹窗

<el-button @click="open">我是弹窗按钮！</el-button>

与`Vue`相同，你不能写多个script，比如下面这个按钮，如果将其写下面的形式，则第一个按钮不会触发事件。我猜的，大概率被下面的`<script>`覆盖了

```vue

<el-button @click="open">我是弹窗按钮！</el-button>
<script>
export default {
  methods: {
    open() {
      this.$alert('事件弹窗！', '你好', {
        confirmButtonText: '确定',
      });
    }
  }
}
</script>
<el-button @click="secondOpen">第二个事件弹窗！</el-button>
<script>
export default {
  methods: {
    secondOpen() {
      this.$alert('我是第二个，与上面不同！', '你好', {
        confirmButtonText: '确定',
      });
    }
  }
}
</script>
```

因此，需要使用一个`<script>`书写所有的函数或参数，将两个函数写到一个里面，如下：

```vue

<script>
export default {
  methods: {
    open() {
      this.$alert('事件弹窗！', '你好', {
        confirmButtonText: '确定',
      });
    },
    secondOpen() {
      this.$alert('我是第二个，与上面不同！', '你好', {
        confirmButtonText: '确定',
      });
    }
  }
}
</script>
```

这样，下面这个按钮和上面的按钮就都可以使用啦

<el-button @click="secondOpen">第二个事件弹窗！</el-button>
<script>
  export default {
    methods: {
      open() {
        this.$alert('事件弹窗！', '你好', {
          confirmButtonText: '确定',
        });
      },
      secondOpen() {
        this.$alert('我是第二个，与上面不同！', '你好', {
          confirmButtonText: '确定',
        });
      }
    }
  }
</script>

所以建议将所有的`<script>`内容写在`md`文档的最后

## 本站结构

本站的目录结构如下

<img :src="$withBase('/website tree.png')" alt="foo">

**为啥不用`tree`？**

因为tree不太好用，生成的没有`.vuepress`文件夹，且对空格的支持不太好
