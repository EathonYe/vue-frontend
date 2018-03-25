<template>
  <div class="content">
    <img src="../assets/logo.png">
    <el-row>
      <el-input v-model="username" placeholder="请输入用户名"></el-input>
    </el-row>
    <el-row>
      <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
    </el-row>
    <el-row>
      <el-button type="primary" @click="loginValidate" :loading="loading">登录</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loading: false,
      username: '',
      password: ''
    }
  },
  methods: {
    loginValidate () {
      this.loading = true

      if (this.username && this.password) {
        this.$http({
          method: 'post',
          url: this.$urlPrefix + '/login/do',
          params: {
            username: this.username,
            password: this.password
          }
        }).then((res) => {
          console.log(res.data.message)
        }).catch(res => console.error('login failed:' + res))
        this.$message({
          type: 'success',
          message: '登录成功！',
          duration: 2000
        })
        this.$router.push('/index')

        // 使用jsonp跨域通信
        // window.handleRes = function (res) {
        //   console.log('jsonp', res.message)
        // }
        // const script = document.createElement('script')
        // script.src = this.$urlPrefix + '/login/do?callback=handleRes'
        // document.body.insertBefore(script, document.body.firstChild)
      } else {
        this.$message({
          type: 'error',
          message: '请输入正确的用户名和密码！'
        })
      }

      this.loading = false
    }
  }
}
</script>

<style>
.content {
    width: 270px;
    margin: 0 auto;
    text-align: center;
    padding-top: 60px;
}
.content .el-row {
  margin-top: 20px;
}
.content .el-button {
  width: 270px;
}
</style>
