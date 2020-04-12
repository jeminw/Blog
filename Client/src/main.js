import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)

Vue.config.productionTip = false

//Use toUpperCase() function ES6
Vue.filter("to-uppercase",function(value){
  return value.toUpperCase();
})

Vue.filter("snippet",function(value){
  return value.slice(0,100) + "...";
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
