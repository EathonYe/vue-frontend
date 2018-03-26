import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login'
import Index from '@/pages/Index'

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
      }
    }
  ]
})
