#!/usr/bin/env node
/***/
const useInquirer = require('../src/utils/useInquirer');
const { version } = require('../package.json');

// 定义命令行参数
const { Command } = require('commander');
const program = new Command();

// create+projectName命令用于快捷的创建指定文件名的项目
program
  .command('create [project]')
  .version(version)
  .description('Create a new template')
  .option('-f, --force', 'Overwrite existing files')
  .action((project, options) => {
    if (!project) {
      useInquirer();
    }
  });
// add命令用于命令式的方式创建项目
program
  .command('add')
  .version(version)
  .description('Create projects interactively')
  .action(() => {
    useInquirer();
  });
program.parse(process.argv);
