/**
 * @Date:   2016-09-30T13:45:01+08:00
* @Last modified time: 2016-09-30T14:36:14+08:00
 */

/**
 * 工具类
 */

const isIos = () => {
  let ua = window.navigator.userAgent.toLowerCase()
  if (/ipad|iphone|ipod/.test(ua)) {
    return true
  } else {
    return false
  }
}

/**
 * 时间格式化
 * @method Format
 * @param  {[type]} fmt [description]
 */

Date.prototype.Format = function(fmt) {
  let o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "H+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
  for (let k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
  return fmt
}

/**
 * 日期转换方法(IOS不识别日期 xxx/xxx/xxx 格式式)
 * @method HackDate
 */

function HackDate() {
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

export const timeToNow = (time) => {
  const t = parseFloat(new Date - new Date(time)) / 1000
  let str = ''
  if (t) {
    if (t > 60 && t < 3600) {
      str = `${parseInt(t / 60.0, 10)}分钟前`
    } else if (t >= 3600 && t < 86400) {
      str = `${parseInt(t / 3600.0, 10)}小时前`
    } else if (t >= 86400 && t < 86400 * 30) {
      str = `${parseInt(t / 86400.0, 10)}天前`
    } else if (t >= 86400 * 30 && t < 86400 * 365) {
      str = `${parseInt(t / (86400.0 * 30), 10)}个月前`
    } else if (t >= 86400 * 365) {
      str = `${parseInt(t / (86400.0 * 365), 10)}年前`
    } else {
      str = `${parseInt(t, 10)}秒前`
    }
  }
  return str
}
