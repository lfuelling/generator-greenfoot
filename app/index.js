'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');

module.exports = class extends Generator {
  prompting() {

    console.log(chalk.dim("                                     ,a,\r\n                                 ,lfo\"\"v6a,\r\n                             ,lfo\"\"      \"v6a,\r\n                         ,lfo\"\"             \"v6a,\r\n                     ,lfo\"\"                    \"v6a,\r\n                 ,lfo\"\"          ,lfoa,           \"v6a,\r\n             ,lfo\"\"          ,lfo\"\" \"8v6a,           \"v6a,\r\n         ,lfo\"\"          ,lfo\"\"      #  \"v6a,           \"v6a,\r\n     ,lfo\"\"          ,lfo\"\"         ,#.    \"v6a,           \"v6a,\r\n ,gPPR8,         ,lfo\"\"          ,lfo8a|      \"v6a,           \"v6a,\r\ndP'   `Yb    ,lfo\"\"          ,lfo\"\"   \"v6a,  ,lfo\"\"          ,lfo\"8\r\n8)     (8,lfo\"\"          ,lfo\"\"          v688\"\"          ,lfo\"\"   8\r\nYb     d8P\"          ,lfo\"\"          ,lfo\"\"          ,lfo\"\"       8\r\n \"8ggg8\"         ,lfo\"\"          ,lfo\"\"          ,lfo\"\"          ,8\r\n             ,gPPR8,         ,lfo\"\"          ,lfo\"\"          ,lfo\"\"\r\n            dP'   `Yb    ,lfo\"\"          ,lfo\"\"          ,lfo\"\"\r\n            8)     (8,lfo\"\"          ,lfo\"\"          ,lfo\"\"\r\n            Yb     d8P\"          ,lfo\"\"          ,lfo\"\"\r\n             \"8ggg8\"         ,lfo\"\"          ,lfo\"\"   \r\n                         ,gPPR8,         ,lfo\"\"       \r\n                        dP'   `Yb    ,lfo\"\"\r\n                        8)     (8,lfo\"\"\r\n                        Yb     d8P\"\r\n                         \"8ggg8\"" +
      chalk.cyan('\n\nWelcome to the slightly buggy Greenfoot generator by Lerk!')));

    const prompts = [
      {
        type: 'string',
        name: 'packageGroup',
        message: '(1/10) What is your package group?',
        default: 'com.example'
      },
      {
        type: 'string',
        name: 'packageArtifact',
        message: '(2/10) What is your artifactId?',
        default: 'greenfoot'
      },
      {
        type: 'string',
        name: 'packageName',
        message: '(3/10) What is your default package name?',
        default: 'com.example.greenfoot'
      },
      {
        type: 'string',
        name: 'baseName',
        message: '(4/10) What is the base name of the app? (lowercase, no whitespaces)',
        default: 'greenfoot-example'
      }, {
        type: 'string',
        name: 'appName',
        message: '(5/10) What is the title of your app?',
        default: 'Greenfoot Example'
      },
      {
        type: 'string',
        name: 'appDescription',
        message: '(6/10) Give a short description of your project.',
        default: 'This app does awesome things.'
      },
      {
        type: 'string',
        name: 'mainWorldName',
        message: '(7/10) What is the name of your main World?',
        default: 'MyWorld'
      },
      {
        type: 'string',
        name: 'mainActorName',
        message: '(9/10) What is the name of the main Actor class?',
        default: 'MyActor'
      },
      {
        type: 'string',
        name: 'mainClassName',
        message: '(10/10) What is the name of the Launcher class?',
        default: 'App'
      }
    ];

    return this.prompt(prompts).then(props => {
      this.packageGroup = props.packageGroup;
      this.packageArtifact = props.packageArtifact;
      this.packageName = props.packageName;
      this.baseName = props.baseName;
      this.appName = props.appName;
      this.appDescription = props.appDescription;
      this.mainWorldName = props.mainWorldName;
      this.mainActorName = props.mainActorName;
      this.mainClassName = props.mainClassName;
      this.fullMainWorldName = `${props.packageName}.${props.mainWorldName}`;
      this.fullMainActorName = `${props.packageName}.${props.mainActorName}`;
    });
  }

  writing() {
    // base vars
    const packageFolder = this.packageName.replace(/\./g, '/');
    const javaDir = 'src/main/java/' + packageFolder + '/';
    const resourceDir = 'src/main/resources/';
    const basename = this.baseName + '/';
    const javaDirTemplate = 'src/main/java/package/';
    const resourceDirTemplate = 'src/main/resources/';

    chalk.white('basename is: ' + basename);
    chalk.white('package folder is: ' + javaDir);

    // Project
    this.template('pom.xml', 'pom.xml', this, {'interpolate': /<%=([\s\S]+?)%>/g});

    // Java - base
    this.template(javaDirTemplate + 'App.java', javaDir + this.mainClassName +'.java', this, {'interpolate': /<%=([\s\S]+?)%>/g});
    this.template(javaDirTemplate + 'World.java', javaDir + this.mainWorldName +'.java', this, {'interpolate': /<%=([\s\S]+?)%>/g});
    this.template(javaDirTemplate + 'Actor.java', javaDir + this.mainActorName +'.java', this, {'interpolate': /<%=([\s\S]+?)%>/g});

    // Resources - base
    this.template(resourceDirTemplate + 'standalone.properties', resourceDir + 'standalone.properties', this, {'interpolate': /<%=([\s\S]+?)%>/g});
    this.template(resourceDirTemplate + 'project.greenfoot', resourceDir + 'project.greenfoot', this, {'interpolate': /<%=([\s\S]+?)%>/g});
    this.template(resourceDirTemplate + 'README.txt', resourceDir + 'README.txt', this, {'interpolate': /<%=([\s\S]+?)%>/g});
    this.template(resourceDirTemplate + 'soundindex.list', resourceDir + 'soundindex.list', this, {});
    this.template(resourceDirTemplate + 'images/world.png', resourceDir + 'images/world.png', this, {});

    // Base folder stuff
    this.template('.npmignore', '.gitignore', this, {});
    this.template('README.md', 'README.md', this, {'interpolate': /<%=([\s\S]+?)%>/g});

    this.config.set('packageName', this.packageName);
    this.config.set('baseName', this.baseName);
    this.config.set('appName', this.appName);
  }

  install() {
    // noop
  }
};
