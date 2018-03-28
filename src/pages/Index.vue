<template>
    <el-container style="height: 100%;">
      <el-header>
          <h2>Management System</h2>
          <div class="fr">
              <img src="../assets/default.png" alt="头像" srcset="">
              <span>{{username}}，欢迎访问！</span>
              <el-dropdown>
                  <i class="el-icon-more-outline" style="margin-left: 10px"></i>
                  <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>个人主页</el-dropdown-item>
                      <el-dropdown-item>修改密码</el-dropdown-item>
                      <el-dropdown-item>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
              </el-dropdown>
          </div>
      </el-header>
      <el-container>
          <el-aside width="250px">
            <el-menu default-active="1-1" :default-openeds="['1']">
              <el-submenu index="1">
                  <template slot="title"><i class="el-icon-message"></i>基础信息</template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">人员管理</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                  </el-submenu>
              </el-submenu>
              <el-submenu index="2">
                  <template slot="title"><i class="el-icon-menu"></i>系统设置</template>
                  <el-menu-item-group>
                    <el-menu-item index="2-1">修改密码</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                  </el-submenu>
              </el-submenu>
              <el-submenu index="3">
                  <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                  <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="3-1">选项1</el-menu-item>
                  <el-menu-item index="3-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                  <el-menu-item index="3-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="3-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                  </el-submenu>
              </el-submenu>
              </el-menu>
          </el-aside>
          <el-main>
            <router-view name="subMain"></router-view>
          </el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
  name: 'Index',
  computed: {
    username () {
      return this.$store.state.loginSubject.username
    }
  },
  created () {
    this.$store.dispatch('getUserList')
  }
}
</script>

<style>
    .el-aside {
        color: #333;
        min-width: 250px;
    }
    .el-menu {
        height: 100%;
    }
    .el-header {
        background-color: #fff;
        color: #333;
        line-height: 60px;
        border-bottom: 1px solid #cecece;
    }
    .el-header h2 {
        font-size: 20px;
        color: #4eb5ff;
        line-height: 100%;
        float: left;
    }
    .el-header .fr {
        float: right;
    }
    .el-header .fr img {
      width: 30px;
      vertical-align: middle;
      margin-right: 5px;
    }
    .el-header .fr span {
      color: #333;
      font-size: 15px;
    }
</style>
