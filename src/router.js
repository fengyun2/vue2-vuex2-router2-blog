/**
* @Date:   2016-10-07T11:03:48+08:00
* @Last modified time: 2016-10-07T11:33:23+08:00
*/

/* 新版本路由 */
import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Article from './views/Article'
import Topic from './views/Topic'
import Video from './views/Video'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/article',
      name: 'article',
      component: Article
    }, {
      path: '/topic',
      name: 'topic',
      component: Topic
    }, {
      path: '/video',
      name: 'video',
      component: Video
    }
  ]
})
