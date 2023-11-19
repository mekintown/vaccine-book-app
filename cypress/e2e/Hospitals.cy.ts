describe('Home Page Tests', () => {
  it('plays and pauses video, then navigates to /hospital', () => {
    // Visit the Home page
    cy.visit('/');
    // Check if the video is playing

    cy.get('video').should('be.visible').and('have.prop', 'paused', false);

    // Wait and pause the video
    cy.wait(5000);
    cy.contains('button', 'Pause').click();
    cy.get('video').should('have.prop', 'paused', true);

    // Navigate to /hospital and check for images
    cy.contains('button', 'Hospital').click();
    cy.url().should('include', '/hospital');
    cy.get('img').should('have.length.at.least', 3);
  });
});