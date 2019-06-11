Feature: Pick a shirt
    As a user of a web store
    I should be able to pick a product
    In order to purchase it

    Scenario: Webstore prodcut Test
        Given I go to "http://automationpractice.com/"
        When I go to t-shirts menu
        And I add the t-shirt to my cart
        Then I should go to checkout
