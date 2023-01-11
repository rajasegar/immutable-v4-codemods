'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'map-to-array',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});
