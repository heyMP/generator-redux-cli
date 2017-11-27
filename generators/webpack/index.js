'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const Case = require('case');
const _ = require('lodash');

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'confirm',
        name: 'dependencies',
        message: 'Add dependencies to package.json?',
        default: this.options.dependencies ? this.options.dependencies : true
      },
      {
        type: 'input',
        name: 'output',
        message: 'Specify input directory',
        default: this.options.name ? this.options.name : './redux/app.js'
      },
      {
        type: 'input',
        name: 'output',
        message: 'Specify output directory',
        default: this.options.name ? this.options.name : 'dist'
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
    if (this.props.dependencies) {
      this._updatePackageJSON();
    }
    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc'),
      this.props
    );
  }

  _updatePackageJSON() {
    const target = this.destinationPath('package.json');
    const targetExists = this.fs.exists(target);
    if (targetExists) {
      const scripts = {
        scripts: {
          webpack: 'webpack'
        }
      };
      var packageJson = JSON.parse(this.fs.read(target));
      packageJson = Object.assign(packageJson, scripts);
      this.fs.write(target, JSON.stringify(packageJson));
    }
  }

  install() {
    if (this.props.dependencies) {
      this.npmInstall(['webpack'], { 'save-dev': true });
      this.npmInstall(['babel-loader'], { 'save-dev': true });
      this.npmInstall(['babel-core'], { 'save-dev': true });
      this.npmInstall(['babel-preset-env'], { 'save-dev': true });
      this.npmInstall(['babel-preset-es2015'], { 'save-dev': true });
    }
  }
};
