/**
* @Date:   2016-09-27T22:50:03+08:00
* @Last modified time: 2016-10-07T13:06:03+08:00
*/

/**
 * actions.js(分发操作,mutations接收)
 * 可以分解成多个文件
 */

import 'whatwg-fetch'
/* import {baiduAK} from './config' */

/**
 * 用统一的函数处理并分发mutations
 * @method makeAction
 * @param  {[type]}   type [description]
 * @return {[type]}        [description]
 *
 * Usage:
 *
 * export const displayArticle = makeAction('DISPLAY_ARTICLE')
 */

/* function makeAction(type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
} */

/**
 * get请求
 * @method _get
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}       Promise
 */

const _get = ({url, query}) => {
  let _url = ''
  if (query) {
    _url = `http://localhost:8081${url}?${query}`
  } else {
    _url = `http://localhost/${url}`
  }

  return fetch(_url)
  .then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return res.json()
    }
    return Promise.reject(new Error(res.status))
  })
}

/**
 * post请求
 * @method _post
 * @param  {String} url    api地址
 * @param  {Object} params 包含post内容的Object
 * @return {Promise}        Promise
 */

/* const _post = (url, params) => {
  return fetch(`http://localhost:8081${url}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params)
  })
  .then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return res.json()
    }
    return Promise.reject(new Error(res.status))
  })
} */

/* export const displayArticle = ({
  dispatch
}, show) => {
  dispatch('DISPLAY_ARTICLE', show)
} */

/**
 * 获取文章列表
 * @method fetchArticleList
 * @param  {[type]}         dispatch [description]
 * @param  {Number}         [page=5] [description]
 * @return {[type]}                  [description]
 */

export const fetchArticleList = ({ commit }, page = 5) => {
  const url = '/articles'
  const query = `page=${page}`
  return _get({url, query})
  .then((json) => {
    if (json.success) {
      console.log('json-success: ', json.data)
      /* return dispatch('DISPLAY_ARTICLE', json.data) */
      return commit('DISPLAY_ARTICLE', json.data)
    }
    return Promise.reject(new Error('fetchArticleList fail'))
  })
  .catch((err) => {
    return Promise.reject(err)
  })
}

/**
 * 获取话题列表
 * @method fetchTopoicList
 * @param  {[type]}        dispatch [description]
 * @param  {Number}        [page=5] [description]
 * @return {[type]}                 [description]
 */

export const fetchTopoicList = ({commit}, page = 5) => {
  const url = '/topics'
  const query = `page=${page}`
  return _get({url, query})
  .then((json) => {
    if (json.success) {
      console.log('json-success: ', json.data)
      /* return dispatch('DISPLAY_TOPIC', json.data) */
      return commit('DISPLAY_TOPIC', json.data)
    }
    return Promise.reject(new Error('fetchTopoicList fail'))
  })
  .catch((err) => {
    return Promise.reject(err)
  })
}

/* export const displayTopic = ({
  display
}, show) => {
  display('DISPLAY_TOPIC', show)
} */

/**
 * 获取电影列表
 * @method displayVideo
 * @param  {[type]}     dispatch [description]
 * @return {[type]}              [description]
 */

export const displayVideo = ({commit}) => {
  fetch('http://localhost:8081/videos', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then((response) => {
    // 检查响应文本
    response.json()
    .then((data) => {
      if (!data.success) {
        console.log('获取电影列表失败')
        return
      }
      console.log('获取电影列表成功: ', data.data)
      // 正常返回,别忘了处理错误
      /* dispatch('DISPLAY_VIDEO', data.data) */
      commit('DISPLAY_VIDEO', data.data)
    })
  })
  .catch((err) => {
    console.log('获取电影列表ajax请求失败: ', err)
  })
}

export default {
  fetchArticleList,
  fetchTopoicList,
  displayVideo
}
