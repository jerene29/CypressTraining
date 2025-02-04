describe('Amazon Flow', () => {
    // Uncomment and complete the following test case if needed
    /*
    it('sign up', () => {
        // Visit Amazon Signup page
        cy.visit('https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
        
        // Fill in signup details
        cy.get('#ap_email').type('swathimkkulal@gmail.com');
        cy.get('input#continue').click();
        cy.get('#cvf-input-code').type('123456'); // Replace with actual code
        cy.get("input[type='submit']").click();
    });
    */

    it('search and add product to cart', () => {
        // Visit Amazon homepage
        cy.visit('https://www.amazon.com/');

        // Search for a product
        cy.get('#twotabsearchtextbox').type('tshirt');
        cy.get('#nav-search-submit-button').click();

        // Click on the first product in the search results
         // Select the element with data-cy="image-container"
         cy.get('[data-cy="image-container"]')
         .eq(0) // Select the first element (index starts at 0)
         .click();
         
        // Add the product to the cart
        cy.get('#add-to-cart-button').click();
    });
});
