describe('MakeMyTrip Flight Search Test', () => {
    it('should search for flights between two cities', () => {
      // Visit MakeMyTrip website
      cy.visit('www.makemytrip.com');
  
      // Close any popups or modals
      cy.get('body').then(($body) => {
        if ($body.find('.loginModal').length > 0) {
          cy.get('.loginModal').invoke('hide'); // Hide login modal if present
        }
      });
  
      // Click on the Flights tab (if not already selected)
      cy.get('li[data-cy="menu_Flights"]').click();
  
      // Enter the "From" city
      cy.get('label[for="fromCity"]').click();
      cy.get('input[placeholder="From"]').type('Mumbai');
      cy.get('ul[role="listbox"] li').contains('Mumbai, India').click();
  
      // Enter the "To" city
      cy.get('label[for="toCity"]').click();
      cy.get('input[placeholder="To"]').type('Delhi');
      cy.get('ul[role="listbox"] li').contains('Delhi, India').click();
  
      // Select a departure date
      cy.get('label[for="departure"]').click();
      cy.get('div[aria-label="Wed Dec 20 2023"]').click(); // Adjust the date
  
      // Click the "Search" button
      cy.get('a[data-cy="searchFlightBtn"]').click();
  
      // Validate that results are displayed
      cy.get('.listingCard').should('exist'); // Ensure at least one flight card is visible
    });
  });
  