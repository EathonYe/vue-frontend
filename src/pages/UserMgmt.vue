<template>
  <div>
    <el-table :data="tableData" stripe height="600">
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
      total: 50
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
  }
}
</script>

<style>
.el-table th,.el-table td {
  text-align: center;
}
.el-pagination {
  text-align: center;
  margin-top: 10px;
}
</style>
