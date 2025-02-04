describe('OYO Rooms Search Automation', () => {
    it('Searches for a hotel in a destination', () => {
        // Visit OYO Rooms homepage
        cy.visit('https://www.oyorooms.com/', { failOnStatusCode: false });

        // Click on the search bar and type destination
        cy.get('input[placeholder="Search by city, hotel, or neighborhood"]').click().type('Delhi');
        
        // Wait for suggestions and select the first option
        cy.get('.geoSuggestionsList__locationName').first().click();

        // Select check-in and check-out dates
        cy.get('.datePickerDesktop__checkInOut').click(); // Open date picker

// Select new Check-in Date (e.g., 5 Feb)
cy.get('.DateRangePicker__DateLabel') // Replace with actual selector for calendar dates
  .contains('5')
  .click();

// Select new Check-out Date (e.g., 6 Feb)
cy.get('.DateRangePicker__DateLabel')
  .contains('6')
  .click();



        
        // Click on the search button
        cy.get('.searchButton.searchButton--header').click();


// Wait for search results to load
cy.get('.listingHotelDescription__hotelName d-textEllipsis') // Replace with the actual class of hotel results
.should('be.visible')
.first() // Select the first result
.click();
    });
});
