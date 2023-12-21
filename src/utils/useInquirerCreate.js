/**
 * @description: 通过交互式命令行创建项目
 * */
const inquirer = require('inquirer');
const questions = require('../data/question');
const createVue3Template = require('../../bin/createVue3Template');
const createReactTemplate = require('../../bin/createReactTemplate');

const useInquirerCreate = () => {
  inquirer.prompt(questions).then((answers) => {
    const { projectName, template } = answers;
    if (template === 'Vue') {
      createVue3Template(projectName);
    }
    if (template === 'React') {
      createReactTemplate(projectName);
    }
  });
};

module.exports = useInquirerCreate;
