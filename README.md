# List scripts in a package.json

## Why?
Whenever I download a new javascript project for the first time, one of the first things I do is to
see what scripts have been defined in the `package.json` file.
```json
{
  "name": "my-app",
  "scripts": {
    "start": "gulp watch",
    "test": "mocha",
    "clean": "rm -rf dist/",
    "build": "gulp build",
    "coverage": "nyc npm test"
  }
}
```

This small script automates that.

## Installation and Usage
```bash
$ npm install -g list-scripts
$ # cd to a javascript project
$ list-scripts
my-app:
* start - gulp watch
* test - mocha
* clean - rm -rf dist/
* build - gulp build
* coverage - nyc npm test
```

## Contributing
There probably isn't much that would really be needed to be added to this project. That being said,
if you want to contribute, feel free. 

Made by Ryan Gaus, (c) 2016
