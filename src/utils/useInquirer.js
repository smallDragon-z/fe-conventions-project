/**
 * @description: 通过交互式命令行创建项目
 * */
const inquirer = require('inquirer');
const questions = require('../data/question');
const path = require('path');
const { createFolder } = require('../IO/createFolder');
const cloneGit = require('../IO/cloneGit');
const useInquirer = () => {
  inquirer.prompt(questions).then((answers) => {
    const { projectName } = answers;
    const currentDirectory = process.cwd(); // 获取命令行执行的目录
    const folderPath = path.join(currentDirectory, projectName); // 构建文件夹路径
    const { IsCreated } = createFolder(folderPath); // 创建文件夹
    if (IsCreated) {
      cloneGit('smallDragon-z/dgn-vue3-template#main', folderPath);
    }
  });
};

module.exports = useInquirer;
