/**
* @Date:   2016-09-30T13:27:52+08:00
* @Last modified time: 2016-09-30T13:30:07+08:00
*/

import createLogger from 'vuex/logger'

const debug = process.env.NODE_ENV !== 'production'
export default debug ? [createLogger()] : []
