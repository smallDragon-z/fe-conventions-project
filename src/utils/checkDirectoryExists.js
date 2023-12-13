/**
 * @description 创建目录
 * @param {String} folderPath 要创建的目录路径
 * @returns {Boolean} 返回是否创建成功
 * */

const fs = require('fs');
const path = require('path');

const checkDirectoryExists = (folderPath) => {
  // 判断文件夹是否存在
  if (fs.existsSync(folderPath)) {
    return true;
  } else {
    return false;
  }
};

module.exports = { checkDirectoryExists };
