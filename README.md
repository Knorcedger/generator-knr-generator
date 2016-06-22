# generator-knr-generator [![Build Status](https://travis-ci.org/Knorcedger/generator-knr-generator.png?branch=master)](https://travis-ci.org/Knorcedger/generator-knr-generator)

A composite Yeoman generator to bootstrap a project.  
Built for my own needs, but feel free to use it if it fits yours as well.  
Check the dependencies below to see what subgenerators are called.

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install -g generator-knr-generator --save
```

## Usage

In an empty folder

```sh
yo knr-generator
```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [generator-angular-gitignore](https://github.com/Knorcedger/generator-angular-gitignore): A yeoman generator for the .gitignore file in Angular.js projects
- [generator-editorconfig](https://github.com/Knorcedger/generator-editorconfig): A Yeoman generator that creates an EditorConfig file.
- [generator-git-remote](https://github.com/Knorcedger/generator-git-remote): A Yeoman generator to easily add your git remote url as origin
- [generator-gitattributes](https://github.com/Knorcedger/generator-gitattributes): A Yeoman generator that creates a .gitattributes file to replace line endings to LF
- [generator-knr-eslintrc](https://github.com/Knorcedger/generator-knr-eslintrc): A yeoman generator that adds an eslintrc.js file in your project
- [generator-license](https://github.com/jozefizso/generator-license): License generator for Yeoman based projects.
- [generator-npm-init](https://github.com/caseywebb/generator-npm-init): npm init for yeoman
- [generator-travis](https://github.com/iamstarkov/generator-travis): Yeoman generator to get and keep `.travis.yml` up-to-date effortlessly

## Dev Dependencies

- [eslint](https://github.com/eslint/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-google](https://github.com/google/eslint-config-google): ESLint shareable config for the Google style


## License

MIT

_Generated by [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_
