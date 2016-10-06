/**
* @Date:   2016-09-27T10:06:00+08:00
* @Last modified time: 2016-09-30T13:34:28+08:00
*/
// 注册路由
export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component: function (resolve) {
        require(['../views/Home'], resolve)
      }
    },
    '/home': {
      name: 'home',
      component: function (resolve) {
        require(['../views/Home'], resolve)
      }
    },
    '/article': {
      name: 'article',
      component: function (resolve) {
        require(['../views/Article'], resolve)
      }
    },
    '/topic': {
      name: 'topic',
      component: function (resolve) {
        require(['../views/Topic'], resolve)
      }
    },
    '/video': {
      name: 'video',
      component: function (resolve) {
        require(['../views/Video'], resolve)
      }
    }
  })

  router.beforeEach(({to, from, next}) => {
    document.body.scrollTop = 0
    if (to.auth) {
      next()
    } else {
      next()
    }
  })

  router.afterEach(function ({to}) {
    console.log(`成功浏览到: ${to.path}`)
  })
}
