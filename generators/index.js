'use strict';

const Generators = require('yeoman-generator');

module.exports = Generators.Base.extend({
  initializing : function () {
    this.composeWith('lob:eslint');
  }
});