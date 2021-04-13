import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'
import vuetify from './plugins/vuetify';
import {store} from './store/store'
Vue.config.productionTip = false
const router =new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  render: h => h(App),
  vuetify,
  router,
  store
}).$mount('#app')
