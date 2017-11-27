'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const camelcase = require('camelcase');

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name space of your app?',
        default: camelcase(this.appname)
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
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
