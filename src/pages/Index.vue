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
                      <el-dropdown-item>查看</el-dropdown-item>
                      <el-dropdown-item>新增</el-dropdown-item>
                      <el-dropdown-item>删除</el-dropdown-item>
                  </el-dropdown-menu>
              </el-dropdown>
          </div>
      </el-header>
      <el-container>
          <el-aside width="250px">
            <el-menu :default-openeds="['1', '3']">
              <el-submenu index="1">
                  <template slot="title"><i class="el-icon-message"></i>基础支撑系统</template>
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
            <el-table :data="tableData" stripe height="600">
              <el-table-column prop="date" label="日期">
              </el-table-column>
              <el-table-column prop="name" label="姓名">
              </el-table-column>
              <el-table-column prop="address" label="地址">
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="primary"
                    round
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    round
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
  name: 'Index',
  computed: {
    username () {
      return 'Eathon'
    },
    tableData () {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }
      return Array(20).fill(item)
    }
  },
  methods: {
    handleEdit (index, row) {

    },
    handleDelete (index, row) {

    }
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
    .el-table th,.el-table td {
      text-align: center;
    }
</style>
