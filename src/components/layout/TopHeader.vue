<template>
  <div>Yagol的博客
    <div>
      {{ checkApi }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TopHeader',
  data () {
    return {
      checkApi: undefined
    }
  },
  mounted () {
    this.initUserName()
  },
  methods: {
    initUserName: function () {
      this.checkApi = axios.defaults.baseURL.startsWith('http://127.0.0.1') ? 'dev version' : 'prod version'
    }
  }
}
</script>

<style scoped>

</style>
