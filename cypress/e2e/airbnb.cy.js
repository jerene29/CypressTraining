describe('Airbnb Automation Test', () => {
    it('Searches for a place to stay', () => {
        // Visit the Airbnb homepage
        cy.visit('https://www.airbnb.co.in/', { failOnStatusCode: false });

        describe('Airbnb Search Automation', () => {
            it('Searches for a destination', () => {
                // Visit Airbnb homepage
                cy.visit('https://www.airbnb.co.in/', { failOnStatusCode: false });
        
                // Wait for the search input to be visible
                cy.get('input[data-testid="structured-search-input-field-query"]', { timeout: 10000 })
                  .should('be.visible')
                  .click()
                  .type('Goa{enter}');
        
                // Wait for results to load
                cy.wait(3000);
        
                // Verify that results are displayed
                cy.url().should('include', 'Goa');
            });
        });
        
        
      
        
        // Select check-in and check-out dates
        cy.get('[data-testid="structured-search-input-field-split-dates-0"]').click();
        cy.get('[data-testid="datepicker-day-2024-06-10"]').click();
        cy.get('[data-testid="datepicker-day-2024-06-15"]').click();
        cy.get('button').contains('Save').click();

        // Click on the guest selection
        cy.get('[data-testid="structured-search-input-field-guests-button"]').click();
        
        // Increase number of adults
        cy.get('[data-testid="stepper-adults-increase-button"]').click();
        
        // Click the search button
        cy.get('[data-testid="structured-search-input-search-button"]').click();

        // Verify that results are displayed
        cy.url().should('include', 'Goa');
        cy.get('[itemprop="itemListElement"]').should('have.length.greaterThan', 0);
    });
});
