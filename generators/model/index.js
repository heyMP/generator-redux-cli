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
        message: 'What is the unique name of your model?'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      props = Object.assign(props, {
        name: Case.camel(props.name),
        nameConstant: Case.constant(props.name)
      });
      this.props = props;
      this.composeWith(require.resolve('../reducer'), props);
    });
  }
};
