import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Chronos from './ChronosCore/ChronosCore.js'

Vue.config.productionTip = false
Vue.prototype.$chronos = new Chronos()

new Vue({
  store,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')
