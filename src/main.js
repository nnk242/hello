import Vue from 'vue'
import App from './App.vue'

import Bus from './utils/event-bus'

Vue.use(Bus)

//
import router from './router'
import store from './store'

// import './permission'

//Global style
import '@/styles/index.scss'

Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
