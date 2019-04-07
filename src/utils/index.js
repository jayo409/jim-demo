import MD5 from './md5.js';

// 生成指定长度随机字符串
const randomStr = (length) => {
  let str = Math.random().toString(36).substr(2);
  if (str.length >= length) {
    return str.substr(0, length);
  }
  str += Math.random(length - str.length);
  return str;
}

export {
  randomStr,
  MD5
}