"use strict";
const readPackageJson = require('read-pkg-up');
const chalk = require('chalk');

readPackageJson().then(result => {
  if (result.pkg && result.pkg.scripts) {
    console.log(`${chalk.bold(chalk.cyan(result.pkg.name))}:`);
    for (let script in result.pkg.scripts) {
      console.log(`* ${chalk.green(script)} - ${result.pkg.scripts[script]}`);
    }
  } else {
    console.error('error: no scripts.');
  }
});
