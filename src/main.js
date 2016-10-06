/**
* @Date:   2016-09-27T09:55:50+08:00
* @Last modified time: 2016-09-30T13:48:43+08:00
*/

import Vue from 'vue'
// import App from './App'
import VueRouter from 'vue-router'
import configRouter from './routes/routers'
import LyApp from './plugins'

// import { configRouter } from './router'

Vue.use(VueRouter)
Vue.use(LyApp)

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })

let router = new VueRouter({
  hashbang: false,
  history: true,
  saveScrollPosition: true,
  transitionOnLoad: true,
  suppressTransitionError: true,
  linkActiveClass: 'active'
})

configRouter(router)

const App = Vue.extend(require('./App'))

router.start(App, '#app')
