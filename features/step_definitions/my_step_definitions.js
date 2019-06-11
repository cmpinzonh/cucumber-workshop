const assert = require('assert');
const { browser } = require('protractor');
const { Given, When, Then } = require('cucumber');

Given('I go to {string}', async function (site) {
  await browser.get(site);
});

When('I check the title', async function () {

});

Then('I should see the title', async function () {
  assert.equal(await browser.getTitle(), 'Google');
});
