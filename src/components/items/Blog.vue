<template>
  <el-main>
    <el-row>
      <el-col :span="8" v-for="(blog) in blogs" :key="blog">
        <el-card :body-style="{ padding: '15px' }">
          <div style="padding: 14px;">
            <span>{{ blog.title }}</span>
            <div class="bottom clearfix">
              <div>{{ blog.content }}</div>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Blog',
  data () {
    return {
      currentDate: new Date(),
      blogs: [
        {
          id: undefined,
          title: undefined,
          content: undefined,
          createdTime: undefined,
          updatedTime: undefined
        }
      ]
    }
  },
  mounted () {
    this.loadBlog()
  },
  methods: {
    loadBlog: function () {
      axios({
        url: '/blog/get',
        method: 'get'
      }).then(res => {
        if (res.data.success) {
          this.blogs = res.data.data
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
