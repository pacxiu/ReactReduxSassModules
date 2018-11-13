/* config-overrides.js */
const rewireCssModules = require('react-app-rewire-css-modules');
const rewireEslint = require('react-app-rewire-eslint');

function overrideEslintOptions (options) {
  // do stuff with the eslint options...
  return options
}

module.exports = function override(config, env) {
    // ...
    config = rewireCssModules(config, env);
    config = rewireEslint(config, env, overrideEslintOptions);
    // ...
    return config;
}