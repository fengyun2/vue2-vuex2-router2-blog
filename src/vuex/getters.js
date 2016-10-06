/**
* @Date:   2016-09-27T22:50:20+08:00
* @Last modified time: 2016-09-30T16:35:27+08:00
*/

/* getters.js */

/**
 * old (废弃的)
 * @type {[type]}
 */

/* export const getArticles = (state) => state.articles
export const getTopics = (state) => state.topics
export const getVideos = (state) => state.videos */

export const getArticles = ({article}) => article.list
export const getTopics = ({topic}) => topic.list
export const getVideos = ({video}) => video.list
