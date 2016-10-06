/**
* @Date:   2016-09-30T15:50:56+08:00
* @Last modified time: 2016-09-30T15:54:45+08:00
*/

/**
 * topics.js 子 mutation
 * 需要定义数据的 [状态] 和 [mutation]
 */

import {
  DISPLAY_TOPIC
} from '../mutation-types'

const state = {
  list: []
}
const mutations = {
  [DISPLAY_TOPIC] (state, data) {
    state.list = data
  }
}

export default {
  state,
  mutations
}
