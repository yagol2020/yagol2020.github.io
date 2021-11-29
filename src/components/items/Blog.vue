<template>
  <el-main>
    <el-row>
      <el-col :span="8" v-for="(o) in 10" :key="o">
        <el-card :body-style="{ padding: '15px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
               class="image" alt="">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
export default {
  name: 'Blog',
  data () {
    return {
      currentDate: new Date()
    }
  }
}
</script>

<style scoped>

</style>
