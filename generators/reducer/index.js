'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const Case = require('case');

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the unique name of this reducer?'
      }
    ];

    return this.prompt(prompts).then(props => {
      props = Object.assign(props, {
        nameConstant: Case.constant(props.name),
        nameCamelCase: Case.camel(props.name)
      });
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('redux'),
      this.destinationPath('redux'),
      this.props
    );
  }

  install() {
    // this.installDependencies();
  }
};
