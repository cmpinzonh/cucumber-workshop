exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('../node_modules/protractor-cucumber-framework'),
  specs: [ '../features/**/*.feature' ],
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
  },
  capabilities: {
    'browserName': 'chrome'
  },
  cucumberOpts: {
    require: '../features/**/step_definitions/*.js',
    tags: false,
    profile: false,
    'no-source': true
  }
};
