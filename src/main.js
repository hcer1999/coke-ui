import Vue from 'vue'
import App from './App.vue'
import CButton from './components/button'

Vue.config.productionTip = false

const components = [
  CButton
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  CButton
}
new Vue({
  render: h => h(App)
}).$mount('#app')
