const path = require('path')
const {override, addWebpackAlias} = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    Components: path.resolve(__dirname, './src/components'),
    '~': path.resolve(__dirname, 'src'),
  })
);
