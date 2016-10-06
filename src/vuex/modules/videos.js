/**
* @Date:   2016-09-30T15:51:04+08:00
* @Last modified time: 2016-09-30T15:55:11+08:00
*/

/**
 * videos.js 子 mutation
 * 需要定义数据的 [状态] 和 [mutation]
 */

import {
  DISPLAY_VIDEO
} from '../mutation-types'

const state = {
  list: []
}
const mutations = {
  [DISPLAY_VIDEO] (state, data) {
    state.list = data
  }
}

export default {
  state,
  mutations
}
