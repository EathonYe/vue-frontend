import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login'
import Index from '@/pages/Index'
import UserMgmt from '@/pages/UserMgmt'
import Test from '@/pages/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      components: {
        main: Login
      }
    },
    {
      path: '/index',
      name: 'index',
      components: {
        main: Index
      },
      children: [
        {
          path: '/',
          name: 'userMgmt',
          components: {
            subMain: UserMgmt
          }
        },
        {
          path: 'test',
          name: 'test',
          components: {
            subMain: Test
          }
        }
      ]
    }
  ]
})
