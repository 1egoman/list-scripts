#!/usr/bin/env node
"use strict";
const readPackageJson = require('read-pkg-up');
const chalk = require('chalk');

// Read package.json from disk
readPackageJson().then(result => {
  // Log out scripts if they exist.
  if (result && result.pkg && result.pkg.scripts) {
    console.log(`${chalk.bold(chalk.cyan(result.pkg.name))}:`);
    for (let script in result.pkg.scripts) {
      console.log(`* ${chalk.green(script)} - ${result.pkg.scripts[script]}`);
    }
  } else {
    console.error('error: no scripts.');
  }
}).catch(console.error.bind(console));
