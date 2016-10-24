/**
* @Date:   2016-10-07T11:03:48+08:00
* @Last modified time: 2016-10-07T11:33:23+08:00
*/

/* 新版本路由 */
import Vue from 'vue'
import Router from 'vue-router'

// import Home from './views/Home'
// import Article from './views/Article'
// import Topic from './views/Topic'
// import Video from './views/Video'

/**
 * 引入AMD风格require, 异步组件
 *
 */
const Home = resolve => require(['./views/Home'], resolve)
const Article = resolve => require(['./views/Article'], resolve)
const Topic = resolve => require(['./views/Topic'], resolve)
const Video = resolve => require(['./views/Video'], resolve)

/**
 * 如果使用 webpack2, 也可以用
 * const Home = () => System.import('./views/Home')
 */

Vue.use(Router)

const router = new Router({
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

/**
 * 添加全局导航钩子
 *
 */

router.beforeEach((to, from, next) => {
  console.log(`come from ${from.path}`)
  next()
})

export default router
