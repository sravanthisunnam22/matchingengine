describe('Matching Engine Website Test', () => {
    
    //Vists the webiste and verifies the title
    it('Matching Engine Website', () => {
      cy.visit('https://www.matchingengine.com');
      cy.wait(2000);
      cy.title().should('eq', 'Matching Engine by Spanish Point Technologies Ltd.');
    })

    //expands nav bar menu and select the Repertoire Management Module &
    //scroll to view - additional features -> then click on Products Supported followed by assert the 
    //list of products mentioned.
    it('expands nav bar menu', () => {
        cy.visit('https://www.matchingengine.com')
        cy.wait(20000);
        cy.xpath('//nav/div[1]/div/span[1]').click();
        cy.xpath('(//a[normalize-space()="Repertoire Management Module"])[1]').click();
        cy.contains('h2', 'Additional Features').scrollIntoView();
        cy.contains('a', 'Products Supported').click();
        cy.contains('h3', 'There are several types of Product Supported:').should('be.visible');
        cy.get('ul li').should('contain', 'Cue Sheet / AV Work');
        cy.get('ul li').should('contain','Recording');
        cy.contains('span','Bundle');
        cy.contains('span', 'Advertisement')
    })
  })