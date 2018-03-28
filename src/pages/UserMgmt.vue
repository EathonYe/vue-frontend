<template>
  <div>
    <el-row>
      <el-input placeholder="请输入搜索的姓名" v-model="selective.username" clearable></el-input>
      <el-button type="primary" @click="searchUserList">搜索</el-button>
    </el-row>
    <el-table :data="tableData" stripe height="550">
        <el-table-column prop="username" label="姓名">
        </el-table-column>
        <el-table-column prop="sex" label="性别">
          <template slot-scope="scope">
            <el-tag :type="scope.row.sex === 0 ? 'danger' : 'success'">{{ scope.row.sex === 0 ? '女生' : '男生' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="phone" label="联系电话">
        </el-table-column>
        <el-table-column prop="email" label="邮箱">
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
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total">
      </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'UserMgmt',
  data () {
    return {
      total: 50,
      selective: {
        username: ''
      }
    }
  },
  computed: {
    tableData () {
      // const item = {
      //   date: '2016-05-02',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1518 弄'
      // }
      // return Array(20).fill(item)

      return this.$store.state.userList
    }
  },
  methods: {
    searchUserList () {

    },
    handleEdit (index, row) {

    },
    handleDelete (index, row) {

    }
  }
}
</script>

<style scoped>
.el-table th,.el-table td {
  text-align: center;
}
.el-pagination {
  text-align: center;
  margin-top: 10px;
}
.el-row {
  margin-bottom: 20px;
}
.el-row .el-input {
  width: auto;
}
</style>
