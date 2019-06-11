const assert = require('assert');
const { browser, $ } = require('protractor');
const { Given, When, Then } = require('cucumber');

When('I go to t-shirts menu', async function () {
    await $('#block_top_menu > ul > li:nth-child(3) > a').click();
    await(browser.sleep(3000));
});

When('I add the t-shirt to my cart', async function () {
    await $('.ajax_add_to_cart_button').click();
    await(browser.sleep(3000));
});

Then('I should go to checkout', async function () {
  assert.equal(await $('.layer_cart_product h2').getText(), 'Product successfully added to your shopping cart');
});