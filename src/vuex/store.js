/**
 * @Date:   2016-09-27T22:49:52+08:00
* @Last modified time: 2016-10-07T10:18:56+08:00
 */

/**
 * store.js(数据入口文件)
 * 1. 可以分解成多个modules文件
 * 2. 在根组件调用, 然后可以让所有子组件共享数据
 * 3. 子 mutations 需要定义数据的 [状态] 和 [mutation]
 */

import Vue from 'vue'
import Vuex from 'vuex'
/* import middlewares from './middlewares' */

/**
 * 导入各个模块的 [初始状态] 和 [mutations]
 */
import article from './modules/articles'
import topic from './modules/topics'
import video from './modules/videos'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug

/* state */
/* const state = { */
/*  articles: [], */
/*  topics: [],
  videos: [] */
/* } */

/* mutations */
/* const mutations = { */
/*  DISPLAY_ARTICLE (state, data) {
    state.articles = data
  }, */
/*  DISPLAY_TOPIC (state, data) {
    state.topics = data
  },
  DISPLAY_VIDEO (state, data) {
    state.videos = data
  } */
/* } */

export default new Vuex.Store({
  modules: {
    /* 这个名字与 getters.js 获取[state]的值有关 */
    article,
    topic,
    video
  }
/* , state,
  mutations, */
/*  strict: debug, */
/*  middlewares */
})
