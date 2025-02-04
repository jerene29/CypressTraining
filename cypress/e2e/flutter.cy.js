describe('Flutter Web App Interaction', () => {
    it('should load the Flutter app and interact with its elements', () => {
      // Visit the Flutter web app
      cy.visit('https://flutter-web-avanti-dot-indihood-qa-in.appspot.com', {
        timeout: 20000  // Increase timeout to allow for Flutter app initialization
      });
  
      //cy.findByText('Confirm').click();
    });
  });
  