// Import necessary Cypress commands
/// <reference types="cypress" />

describe('Amazon India Homepage and Login Verification', () => {

    // Before each test, navigate to the homepage
    beforeEach(() => {
      cy.visit('https://www.amazon.in/');
    });
  
    it('Amazon India homepage', () => {
      // Verify the title of the homepage
      cy.title().should('include', 'Online Shopping site in India');
  
      // Verify that the Amazon logo is visible
      cy.get('#nav-logo-sprites').should('be.visible');
  
      // Verify the search bar exists - ID
      cy.get('#twotabsearchtextbox').should('exist');
    });
  
    it('Verify login and navigate to account page', () => {
      // Click on the 'Sign in' button - ID
      cy.get('#nav-link-accountList').click();
  
      // Enter username and proceed
      cy.get('#ap_email').type('swara.padelkar1980@gmail.com'); // Enter valid email
      cy.get('#continue').click();
  
      // Enter password and login
      cy.get('#ap_password').type('Lizy@1950'); // Enter valid password
      cy.get('#signInSubmit').click();
  
      cy.wait(10000)
      // Verify successful login by checking the user's name or account page
      cy.get('#nav-link-accountList-nav-line-1').should('contain.text', 'Hello');
  
      // Optionally, navigate to 'Your Account' page and verify
      cy.get('#nav-link-accountList').click();
      cy.wait(10000)
      cy.url().should('include', 'youraccount');
    });
  
  });
  