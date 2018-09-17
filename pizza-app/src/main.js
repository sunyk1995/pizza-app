import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://wd9267301478zebmhs.wilddogio.com/'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
