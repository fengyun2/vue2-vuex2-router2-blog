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

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    // savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
    return savedPosition
  } else {
    const position = {}
      // new navigation.
      // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  scrollBehavior,
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      scrollToTop: true
    }
  }, {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      scrollToTop: true
    }
  }, {
    path: '/article',
    name: 'article',
    component: Article,
    meta: {
      scrollToTop: true
    }
  }, {
    path: '/topic',
    name: 'topic',
    component: Topic
  }, {
    path: '/video',
    name: 'video',
    component: Video
  }]
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
