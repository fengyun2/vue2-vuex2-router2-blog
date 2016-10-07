/**
* @Date:   2016-10-07T11:10:57+08:00
* @Last modified time: 2016-10-07T11:34:15+08:00
*/

import Vue from 'vue'
import App from './App.vue'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './vuex/store'
import LyApp from './plugins'

sync(store, router)
Vue.use(LyApp)

let app = new Vue({
  router,
  store,
  render: h => h(App)
})

export { app, router, store }
