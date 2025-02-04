describe('QA Automation Demo Registration Form Test', () => {
  before(() => {
      // Ignore 'angular is not defined' error and let the test continue
      Cypress.on('uncaught:exception', (err) => {
          if (err.message.includes('angular is not defined')) {
              return false; // Ignore this specific error
          }
          return true; // Fail the test for other errors
      });
  });

  it('should register successfully with valid data', () => {
      // Visit the demo registration page
      cy.visit('https://demo.automationtesting.in/Register.html');

      // Fill in the form fields
      cy.get('input[placeholder="First Name"]').type('Jerene1');
      cy.get('input[placeholder="Last Name"]').type('Jos1e');
      cy.get('textarea[ng-model="Adress"]').type('1234 Main St, City, Country');
      cy.get('input[type="email"]').type('jerene123@example.com');
      cy.get('input[type="tel"]').type('4321567892');

      // Gender radio button
      cy.get('input[value="Male"]').check();

      // Hobbies checkboxes
      cy.get('input[value="Cricket"]').check();

      // Country dropdown
// Open the dropdown by clicking the select2 selection element
cy.get('.select2-selection.select2-selection--single').click();

// Find the dropdown option (you can match by the option's text or value)
cy.contains('.select2-results__option', 'India') // Match option text 'India'
  .click();  // Click the option
      

      // Skills dropdown
      cy.get('#Skills').select('Java');

      // Multi-select Languages dropdown
      //cy.get('#msdd').click();

      // Select the desired option (e.g., "English")
      //cy.contains('.select2-results__option', 'English').click();



      // Year, Month, and Day dropdowns
      cy.get('#yearbox').select('1990');
      cy.get('select[ng-model="monthbox"]').select('January');
      cy.get('#daybox').select('15');

      // Password fields
      cy.get('#firstpassword').type('Password123');
      cy.get('#secondpassword').type('Password123');

      // Submit the form
      cy.get('#submitbtn').click();

      // Verify success message (if applicable)
      // Replace this with actual success criteria from the application
      cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
  });
});
