/**
 * @description 问题列表自定义交互式命令行的问题及简单的校验
 * */
const { red } = require('chalk');
const { checkFilenameRules } = require('../utils/checkFilenameRules');
const questions = [
  {
    name: 'projectName',
    type: 'input',
    message: '请输入模板名称',
    default: 'vue3-template',
    validate(val) {
      // 校验
      // 1. 输入不能为中文
      if (checkFilenameRules(val)) {
        return true;
      } else {
        console.log(red('项目名不合法'));
        return false;
      }
    },
  },
  {
    type: 'list',
    name: 'template',
    message: '请选择模板类型',
    choices: ['Vue', 'React'],
    default: 'Vue',
  },
];
module.exports = questions;
