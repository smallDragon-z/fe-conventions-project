#!/usr/bin/env node
/***/
const useInquirerCreate = require('../src/utils/useInquirerCreate');
const { version } = require('../package.json');
const createVue3Template = require('./createVue3Template');
const createReactTemplate = require('./createReactTemplate');

// 定义命令行参数
const { Command } = require('commander');
const program = new Command();

// create+projectName命令用于快捷的创建指定文件名的项目
program
  .command('create <project>')
  .version(version)
  .description('创建项目模板的指令')
  .option('--template <template>', '创建项目模版')
  .action((project, options) => {
    // 不存在project参数时且options.vue3
    if (options.template === 'vue') {
      createVue3Template(project);
    }
    if (options.template === 'react') {
      createReactTemplate(project);
    }
  });
program
  .command('add')
  .version(version)
  .description('使用交互式命令行创建项目模板')
  .action(() => {
    useInquirerCreate();
  });

program.parse(process.argv);
