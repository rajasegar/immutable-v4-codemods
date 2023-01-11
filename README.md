# immutable-v4-codemods

![Build and Deploy](https://github.com/rajasegar/immutable-v4-codemods/workflows/CI/badge.svg)
[![npm version](http://img.shields.io/npm/v/immutable-v4-codemods.svg?style=flat)](https://npmjs.org/package/immutable-v4-codemods 'View this project on npm')


A collection of codemods for upgrading immutable.js from v3 to v4.

## Usage

To run a specific codemod from this project, you would run the following:

```
npx immutable-v4-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add immutable-v4-codemods
immutable-v4-codemods <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->
* [map-to-array](transforms/map-to-array/README.md)
* [rename-seq-of](transforms/rename-seq-of/README.md)
<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`
