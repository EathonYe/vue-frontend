// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.prototype.$urlPrefix = 'http://localhost:8070'
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App) // 调用createElement函数进行根节点的渲染
})
