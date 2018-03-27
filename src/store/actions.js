import axios from 'axios'

export default {
  getUserList (context) {
    axios.get('/user/list').then((res) => {
      // res.data.data.forEach((element, index) => {
      //   res.data.data[index].sex = element.sex === 0 ? '女' : '男'
      // })
      context.commit('setUserList', res.data.data)
    })
  }
}
