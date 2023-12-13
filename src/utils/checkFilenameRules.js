/**
 * @description 检查文件名是否符合规则：文件名必须是小写字母，单词之间用下划线连接
 * @param {String} filename 文件名
 * @returns {Boolean} 是否符合规则
 * */

const checkFilenameRules = (filename) => {
  console.log('filename', filename);
  const reg = /^[a-z]+(-[a-z]+)*$/;
  return reg.test(filename);
};
module.exports = { checkFilenameRules };
