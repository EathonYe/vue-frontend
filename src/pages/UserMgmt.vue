<template>
  <div>
    <el-row>
      <el-input placeholder="请输入搜索的姓名" v-model="selective.username" clearable></el-input>
      <el-button type="primary" plain @click="searchUserList" icon="el-icon-search" class="is-circle"></el-button>
      <el-button type="success" plain round @click="handleAdd" icon="el-icon-plus" class="is-circle fr"></el-button>
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
              class="is-circle"
              @click="handleEdit(scope.$index, scope.row)" icon="el-icon-edit"></el-button>
            <el-button
              size="mini"
              type="danger"
              class="is-circle"
              @click="handleDelete(scope.$index, scope.row)" icon="el-icon-delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total">
      </el-pagination>
      <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" :close="closeDialog">
        <el-form :model="form" :rules="rules" status-icon ref="userForm">
          <el-form-item label="用户名" :label-width="formLabelWidth" prop="username" required>
            <el-input v-model="form.username" auto-complete="off" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth" prop="password" required>
            <el-input type="password" v-model="form.password" auto-complete="off" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" :label-width="formLabelWidth" prop="checkPwd" required>
            <el-input type="password" v-model="form.checkPwd" auto-complete="off" placeholder="请再次输入密码"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth" prop="sex" required>
            <el-select v-model="form.sex" placeholder="请选择性别">
              <el-option label="男" value="1"></el-option>
              <el-option label="女" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="联系电话" :label-width="formLabelWidth" prop="phone" required>
            <el-input v-model="form.phone" auto-complete="off" placeholder="请输入联系电话"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
            <el-input v-model="form.email" auto-complete="off" placeholder="请输入邮箱"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="closeDialog" icon="el-icon-close" class="is-circle"></el-button>
          <el-button type="success" @click="submitForm('userForm')" icon="el-icon-check" class="is-circle"></el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'UserMgmt',
  data () {
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
    var validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入联系电话'))
      } else if (!myreg.test(value)) {
        callback(new Error('格式错误，请重新输入!'))
      } else {
        callback()
      }
    }
    var validateCheckPwd = (rule, value, callback) => {
      if (value === '' || value !== this.form.password) {
        callback(new Error('与密码不同，请再次确认密码！'))
      } else {
        callback()
      }
    }
    return {
      total: 50,
      selective: {
        username: ''
      },
      dialogTitle: '',
      dialogFormVisible: false,
      formLabelWidth: '80px',
      form: {
        username: '',
        password: '',
        checkPwd: '',
        sex: '',
        phone: '',
        email: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        checkPwd: [
          { validator: validateCheckPwd, trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' },
          { required: true, message: '请选择性别', trigger: 'blur' }
        ],
        phone: [
          { validator: validatePhone, trigger: 'blur' }
        ],
        email: [
          { required: false, message: '请输入邮箱', trigger: 'blur' }
        ]
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
    handleAdd () {
      this.dialogFormVisible = true
      this.dialogTitle = '添加用户'
    },
    handleEdit (index, row) {
      this.dialogFormVisible = true
      this.dialogTitle = '编辑用户'
    },
    handleDelete (index, row) {

    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http({
            method: 'post',
            url: '/user/add',
            params: {
              username: this.form.username,
              password: this.form.password,
              sex: this.form.sex,
              phone: this.form.phone,
              email: this.form.email
            }
          }).then((res) => {
            if (res.data.successful) {
              this.$store.dispatch('getUserList')
              this.closeDialog()
              this.$message({
                type: 'success',
                message: res.data.msg
              })
            } else {
              this.$message({
                type: 'error',
                message: res.data.msg
              })
            }
          })
        } else {
          return false
        }
      })
    },
    closeDialog () {
      this.dialogFormVisible = false
      this.resetForm('userForm')
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
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
.el-row {
  margin-bottom: 20px;
}
.el-row .el-input {
  width: auto;
}
.el-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
.fr {
  float: right;
}
.el-input + .el-button {
  margin-left: 20px;
}
.el-form .el-select,.el-form .el-input {
  width: 100%;
}
</style>
