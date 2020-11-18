import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MyHelper from './helpers'

//import './main.scss'

Vue.use(MyHelper)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
