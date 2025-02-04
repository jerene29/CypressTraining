describe('QAonCloud Website Test', () => {
    beforeEach(() => {
        cy.visit('https://qaoncloud.com');
    });

    it('Should load the homepage successfully', () => {
        cy.title().should('include', 'QAonCloud');
    });

    it('Should verify the menu button is visible and clickable', () => {
        cy.get('#homeMainNav > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-9814d64.elementor-section-content-middle.elementor-section-full_width.elementor-section-height-default.elementor-section-stretched.elementor-hidden-mobile.elementor-section-height-default > div > div.elementor-column.elementor-col-20.elementor-inner-column.elementor-element.elementor-element-eee288.ot-flex-column-vertical > div > div > div > div > button')
            .should('be.visible') // Check if the button is present
            .click(); // Click the button
        
        // Example validation after clicking (modify as needed)
        cy.url().should('not.eq', 'https://qaoncloud.com'); // Check if navigation happens
    });

    it('Should navigate to the "Contact Us" page', () => {
        cy.contains('Contact Us').click();
        cy.url().should('include', '/contact-us');
    });

    it('Should check for presence of key elements', () => {
        cy.get('h1').should('be.visible'); // Checking for main heading
        cy.get('footer').should('be.visible'); // Footer should be present
    });
});
