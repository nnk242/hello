import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//Global style
import '@/styles/index.scss'

new Vue({
  render: h => h(App),
}).$mount('#app')
