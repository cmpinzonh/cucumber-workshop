import { Config, browser } from 'protractor';

export const config: Config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['../../features/**/*.feature'],
    SELENIUM_PROMISE_MANAGER: false,
    onPrepare: () => {
      browser.ignoreSynchronization = true;
    },
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: ['--headless', '--disable-gpu']
      }
    },
    cucumberOpts: {
      require: '../features/step_definitions/**/*.js',
      tags: false,
      profile: false,
      'no-source': true,
      format: [require.resolve('cucumber-pretty')]
    }
  };
