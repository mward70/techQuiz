describe(' Start Quiz', () => {
    it('loads quiz and shows first question', () => {
        cy.intercept('GET', '/api/questions', { fixture: 'questions.json' }).as('getQuestions');
    
        cy.visit('http://localhost:3000');
        cy.contains('Start Quiz').click();
        cy.wait('@getQuestions');
    
        cy.contains('What is the capital of France?').should('be.visible');
      });
    });