describe('OrangeHRM Demo Form Automation with Mock CAPTCHA', () => {
    before(() => {
        cy.intercept('POST', '/captcha-verification-endpoint', { statusCode: 200, body: { success: true } }).as('captchaVerification');
        cy.visit('https://www.orangehrm.com/en/book-a-free-demo');
    });

    it('Fills out the demo form and submits it', () => {
        // Fill in the form fields
        cy.get('#Form_submitRequest_FirstName').type('John'); // First Name
        cy.get('#Form_submitRequest_LastName').type('Doe'); // Last Name
        cy.get('#Form_submitRequest_CompanyName').type('Acme Corp'); // Company Name
        cy.get('#Form_submitRequest_Contact').type('john.doe@example.com'); // Email Address
        cy.get('#Form_submitRequest_Country').select('United States'); // Country

        cy.get('#Form_submitRequest_NoOfEmployees').select('51 - 100'); // Number of Employees
        
        // Submit the form
        cy.get('button[type="submit"]').click();

        // Wait for CAPTCHA verification to be mocked
        cy.wait('@captchaVerification');

        // Assert successful form submission
        cy.url().should('include', 'thank-you');
    });
});