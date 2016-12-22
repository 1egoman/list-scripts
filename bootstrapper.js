"use strict";
const readPackageJson = require('read-pkg-up');
const thisPackagesPackageJSON = require('./package');
const fs = require('fs');

console.log('Reading package.json...');
readPackageJson().then(result => {
  // First, add the script to the package
  console.log('Patching scripts...');
  if (!result.pkg.scripts) {
    result.pkg.scripts = {};
  }
  result.pkg.scripts['list-scripts'] = './node_modules/.bin/list-scripts';

  // Then, add the package to the dependencies
  console.log('Patching dependencies...');
  if (!result.pkg.dependencies) {
    result.pkg.dependencies = {};
  }
  result.pkg.dependencies['list-scripts'] = thisPackagesPackageJSON.version;

  // Write to the package json of the current module
  console.log(result.path)
  let data = JSON.stringify(result.pkg, null, 2);
  fs.writeFile(result.path, data, err => {
    if (err) {
      console.log(err);
    } else {
      console.log('Wrote package.json');

      // Then we npm install
      console.log('Almost done!');
      console.log('To finish off the install, run `npm install`!');
      console.log('To use, run `npm run list-scripts`!');
    }
  });
}).catch(console.error.bind(console));
