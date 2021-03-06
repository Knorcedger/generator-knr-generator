'use strict';
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	initializing: {
		gitInit: function() {
			this.spawnCommandSync('git', ['init']);
		},
		npmInit: function() {
			this.composeWith('knr-generator:npm-init', {}, {
				local: require.resolve('generator-npm-init')
			});
		}
	},
	prompting: {
		gitRemote: function() {
			this.composeWith('knr-generator:git-remote', {}, {
				local: require.resolve('generator-git-remote')
			});
		}
	},
	writing: {
		angularGitignore: function() {
			this.composeWith('knr-generator:angular-gitignore', {}, {
				local: require.resolve('generator-angular-gitignore')
			});
		},
		knrEslintrc: function() {
			this.composeWith('knr-generator:knr-eslintrc', {}, {
				local: require.resolve('generator-knr-eslintrc')
			});
		},
		gitattributes: function() {
			this.composeWith('knr-generator:gitattributes', {}, {
				local: require.resolve('generator-gitattributes')
			});
		},
		editorconfig: function() {
			this.composeWith('knr-generator:editorconfig', {}, {
				local: require.resolve('generator-editorconfig')
			});
		},
		license: function() {
			this.composeWith('knr-generator:license', {}, {
				local: require.resolve('generator-license')
			});
		},
		travis: function() {
			this.composeWith('knr-generator:travis', {}, {
				local: require.resolve('generator-travis/generators/app')
			});
		}
	}
});
