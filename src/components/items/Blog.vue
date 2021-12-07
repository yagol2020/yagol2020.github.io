<template>
  <el-main>
    <el-row>
      <el-col :span="8" v-for="(blog) in blogs" :key="blog">
        <el-card :body-style="{ padding: '15px' }">
          <div style="padding: 14px;">
            <span>{{ blog.title }}</span>
            <div class="bottom clearfix">
              <div>{{ blog.content }}</div>
              <el-button type="text" class="button">查看</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      :current-page="currentPage"
      @current-change="loadNextPage">
    </el-pagination>
  </el-main>
</template>

<script>
import axios from 'axios'
import {Page} from '../../bean/BlogPage'

export default {
  name: 'Blog',
  data () {
    return {
      blogs: [
        {
          id: 'id',
          title: 'title',
          content: 'content',
          createdTime: 'createdTime',
          updatedTime: 'updatedTime'
        }
      ],
      currentPage: 1,
      blogsInfo: {
        total: undefined
      }
    }
  },
  mounted () {
    this.loadBlogsInfo()
  },
  methods: {
    loadBlogsInfo: function () {
      axios({
        url: '/blog/blogsInfo',
        method: 'get'
      }).then(res => {
        if (res.data.success) {
          this.blogsInfo.total = res.data.data.total
          this.loadNextPage(1)
        }
      })
    },
    loadNextPage: function (changedPageNum) {
      this.currentPage = changedPageNum
      const page = new Page(this.blogsInfo.total, 10, this.currentPage)
      axios.post('/blog/list', page).then(res => {
        this.blogs = res.data.data.records
      })
    }
  }
}
</script>

<style scoped>

</style>
