describe('Seo metadata', () => {
  describe('Verify SEO Metadata', () => {
    it('should render SEO metadata on Index page', () => {
      cy.visit('/');

      // The Index page should have a page title
      cy.title().should('not.be.empty');

    });

  });
});
