describe('Navigation', () => {
  describe('Static pages', () => {
    it('should navigate to the about page', () => {
      // Start from the index page
      cy.visit('/');

      // The index page should contain an h1
      cy.findAllByText( 
        'Innovación y Servicios Informáticos en Cualquier Lugar.',
     );

    });

  });
});
