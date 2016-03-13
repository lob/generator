'use strict';

const Generators = require('yeoman-generator');
const Merge      = require('lodash').merge;

module.exports = Generators.Base.extend({
  writing: function () {
    var packageJSON = this.fs.readJSON(this.destinationPath('package.json'), {});

    Merge(packageJSON, {
      devDependencies: {
        'generate-changelog': '^1.0.0'
      },
      scripts: {
        'release:patch': 'changelog -p && git add CHANGELOG.md && git commit -m \'updated CHANGELOG.md\' && npm version patch && git push origin && git push origin --tags',
        'release:minor': 'changelog -m && git add CHANGELOG.md && git commit -m \'updated CHANGELOG.md\' && npm version minor && git push origin && git push origin --tags',
        'release:major': 'changelog -M && git add CHANGELOG.md && git commit -m \'updated CHANGELOG.md\' && npm version major && git push origin && git push origin --tags'
      }
    });

    this.fs.writeJSON(this.destinationPath('package.json'), packageJSON);
  }
});