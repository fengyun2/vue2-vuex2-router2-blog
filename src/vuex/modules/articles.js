/**
* @Date:   2016-09-29T17:22:22+08:00
* @Last modified time: 2016-09-30T15:33:53+08:00
*/

/**
 * articles.js 子 mutation
 * 需要定义数据的 [状态] 和 [mutation]
 */

import {
  DISPLAY_ARTICLE
} from '../mutation-types'

const state = {
  list: []
}
const mutations = {
  [DISPLAY_ARTICLE] (state, data) {
    state.list = data
  }
}

export default {
  state,
  mutations
}
