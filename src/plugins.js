/**
* @Date:   2016-09-30T13:37:36+08:00
* @Last modified time: 2016-09-30T13:52:18+08:00
*/

let LyApp = {}

/**
 * 判断是否是IOS设备
 * @method isIos
 * @return {Boolean} [description]
 */

const isIos = () => {
  let ua = window.navigator.userAgent.toLowerCase()
  if (/ipad|iphone|ipod/.test(ua)) {
    return true
  } else {
    return false
  }
}

LyApp.install = (Vue, option) => {
  /**
   * 日期转换方法(IOS不识别日期 xxx/xxx/xxx 格式式)
   * @method HackDate
   */

  Vue.prototype.HackDate = function () {
    if (!arguments[0]) {
      return new Date()
    }
    if (isIos()) {
      let d = new Date(arguments[0])
      if (d.toString() === 'Invalid Date') {
        d = new Date(arguments[0].replace(/-/g, '/'))
      }
      return d
    } else {
      return new Date(arguments[0])
    }
  }
}

export default LyApp
