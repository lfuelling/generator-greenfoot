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
        message: '(1/12) What is your package group?',
        default: 'com.example'
      },
      {
        type: 'string',
        name: 'packageArtifact',
        message: '(2/12) What is your artifactId?',
        default: 'greenfoot'
      },
      {
        type: 'string',
        name: 'packageName',
        message: '(3/12) What is your default package name?',
        default: 'com.example.greenfoot'
      },
      {
        type: 'string',
        name: 'baseName',
        message: '(4/12) What is the base name of the app? (lowercase, no whitespaces)',
        default: 'greenfoot-example'
      }, {
        type: 'string',
        name: 'appName',
        message: '(5/12) What is the title of your app?',
        default: 'Greenfoot Example'
      },
      {
        type: 'string',
        name: 'appDescription',
        message: '(6/12) Give a short description of your project.',
        default: 'This app does awesome things.'
      },
      {
        type: 'string',
        name: 'mainWorldName',
        message: '(7/12) What is the name of your main World?',
        default: 'MyWorld'
      },
      {
        type: 'string',
        name: 'mainActorName',
        message: '(9/12) What is the name of the main Actor class?',
        default: 'MyActor'
      },
      {
        type: 'string',
        name: 'mainClassName',
        message: '(10/12) What is the name of the Launcher class?',
        default: 'App'
      },
      {
        type: 'confirm',
        name: 'useGit',
        message: '(11/12) Do you want to use git?',
        default: true
      },
      {
        type: 'confirm',
        name: 'addCustomFontClass',
        message: '(11/12) Do you plan to use custom fonts?',
        default: true
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
      this.fullMainClassName = `${props.packageName}.${props.mainClassName}`;
      this.useGit = props.useGit;
      this.addCustomFontClass = props.addCustomFontClass;
    });
  }

  writing() {
    // base vars
    const packageFolder = this.packageName.replace(/\./g, '/');
    const javaDir = 'src/main/java/' + packageFolder + '/';
    const resourceDir = 'src/main/resources/';
    const javaDirTemplate = 'src/main/java/package/';
    const resourceDirTemplate = 'src/main/resources/';

    console.log(chalk.dim('Writing files...'));

    // Project
    this.fs.copyTpl(this.templatePath('pom.xml'), this.destinationPath('pom.xml'), this);

    // Java - base
    this.fs.copyTpl(this.templatePath(javaDirTemplate + 'App.java'), this.destinationPath(javaDir + this.mainClassName +'.java'), this);
    this.fs.copyTpl(this.templatePath(javaDirTemplate + 'World.java'), this.destinationPath(javaDir + this.mainWorldName +'.java'), this);
    this.fs.copyTpl(this.templatePath(javaDirTemplate + 'Actor.java'), this.destinationPath(javaDir + this.mainActorName +'.java'), this);
    if(this.addCustomFontClass) {
      this.fs.copyTpl(this.templatePath(javaDirTemplate + 'CustomFont.java'), this.destinationPath('src/main/java/greenfoot/' + 'CustomFont.java'), this);
    }

    // Resources - base
    this.fs.copyTpl(this.templatePath(resourceDirTemplate + 'standalone.properties'), this.destinationPath(resourceDir + 'standalone.properties'), this);
    this.fs.copyTpl(this.templatePath(resourceDirTemplate + 'project.greenfoot'), this.destinationPath(resourceDir + 'project.greenfoot'), this);
    this.fs.copyTpl(this.templatePath(resourceDirTemplate + 'README.txt'), this.destinationPath(resourceDir + 'README.txt'), this);
    this.fs.copy(this.templatePath(resourceDirTemplate + 'soundindex.list'), this.destinationPath(resourceDir + 'soundindex.list'));
    this.fs.copy(this.templatePath(resourceDirTemplate + 'images/world.png'), this.destinationPath(resourceDir + 'images/world.png'));
    this.fs.copy(this.templatePath(resourceDirTemplate + 'images/actor.png'), this.destinationPath(resourceDir + 'images/actor.png'));
    if(this.addCustomFontClass) {
      this.fs.copy(this.templatePath(resourceDirTemplate + 'fonts/unifont.ttf'), this.destinationPath(resourceDir + 'fonts/unifont.ttf'));
    }

    // Base folder stuff
    this.fs.copy(this.templatePath('ignore'), this.destinationPath('.gitignore'));
    this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), this);
  }

  install() {
    if(this.useGit) {
      console.log(chalk.dim('Running \'git init\'...'));
      this.spawnCommand('git',['init']);
    }
  }
};
