import Vue from 'vue'
import LoadingBar from './LoadingBar.vue'

const LoadingConstructor = Vue.extend(LoadingBar)
const loadingDom = new LoadingConstructor({
  el: document.createElement('div')
})
document.body.appendChild(loadingDom.$el)

export default {
  start () {
    loadingDom.start()
  },
  finished () {
    loadingDom.finished()
  },
  error () {
    loadingDom.error()
  }
}
