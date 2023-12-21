/**
 * @description: 直接创建vue3项目模版
 * */
const path = require('path');
const { createFolder } = require('../src/IO/createFolder');
const cloneGit = require('../src/IO/cloneGit');
const chalk = require('chalk');
const createVue3Template = (projectName) => {
  const currentDirectory = process.cwd(); // 获取命令行执行的目录
  const folderPath = path.join(currentDirectory, projectName); // 构建文件夹路径
  const { IsCreated } = createFolder(folderPath); // 创建文件夹
  if (IsCreated) {
    cloneGit('smallDragon-z/dgn-vue3-template#main', folderPath);
  } else {
    console.log(chalk.red('文件夹创建失败'));
  }
};

module.exports = createVue3Template;
