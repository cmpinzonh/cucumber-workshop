const assert = require('assert');
import { browser } from 'protractor';
import { Given, When, Then} from 'cucumber';

Given('I go to {string}', async function (site) {
  await browser.get(site);
});

When('I check the title', async function () {

});

Then('I should see the title', async function () {
  assert.equal(await browser.getTitle(), 'Google');
});
