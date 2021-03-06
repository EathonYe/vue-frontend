// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store/index'
import loadingBar from '@/components/LoadingBar.js'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8070'
Vue.prototype.$http = axios

Vue.prototype.$loadingBar = loadingBar

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App) // 调用createElement函数进行根节点的渲染
})
