<template>
  <div>
    <el-button @click="loadingStart">开始</el-button>
    <el-button @click="loadingFinished">完成</el-button>
    <el-button @click="loadingError">错误</el-button>
  </div>
</template>

<script>
export default {
  name: 'Test',
  methods: {
    loadingStart () {
      this.$loadingBar.start()
    },
    loadingFinished () {
      this.$loadingBar.finished()
    },
    loadingError () {
      this.$loadingBar.error()
    }
  }
}
</script>
