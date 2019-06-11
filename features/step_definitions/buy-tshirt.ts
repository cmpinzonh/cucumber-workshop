const assert = require('assert');
import { browser, $ } from 'protractor';
import { When, Then } from 'cucumber';
import { MenuContentPage, AddToCartPage} from '../../src/page';

const menuContentPage: MenuContentPage = new MenuContentPage();
const addToCartPage: AddToCartPage = new AddToCartPage();

When('I go to t-shirts menu', async function () {
  await menuContentPage.goToTShirtMenu();
});

When('I add the t-shirt to my cart', async function () {
  await addToCartPage.addToCart('Faded Short Sleeve T-shirts');
});

Then('I should go to checkout', async function () {
  await(browser.sleep(1000));
  assert.equal(await $('.layer_cart_product h2').getText(), 'Product successfully added to your shopping cart');
});
