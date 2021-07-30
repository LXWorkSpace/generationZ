export const mixin = {

  getUrl(url) {
    return `http://localhost:8888/${url}`
  },

  getSex(value) {
    if (value == 0) {
      return '男'
    } else if (value == 1) {
      return '女'
    } else if (value == 2) {
      return '组合'
    } else {
      return '不明'
    }
  },
  getBirth(date) {
    return String(date).substr(0, 10);
  }
}