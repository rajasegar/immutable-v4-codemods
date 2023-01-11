'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'rename-seq-of',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});
