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
        message: 'What is the unique name of this reducer?',
        default: this.options.name ? this.options.name : ''
      }
    ];

    return this.prompt(prompts).then(props => {
      props = Object.assign(props, {
        name: Case.camel(props.name),
        nameConstant: Case.constant(props.name)
      });
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('_name.js'),
      this.destinationPath(`redux/reduers/${this.props.name}.js`),
      this.props
    );
  }

  install() {
    // this.installDependencies();
  }
};
