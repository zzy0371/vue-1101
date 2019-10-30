import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// import MyData from './data.js'
// console.log(MyData.name)
// 
// import {num as mynum ,age as myage } from './data.js'
// console.log(mynum,myage)


// 将axios 注册到vue原型中
import axios from 'axios'
Vue.prototype.$http=axios


// Vue js入口  Vue实例
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
