describe(' Start Quiz', () => {
    it('loads quiz and shows first question', () => {
        cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
    
        cy.visit('http://localhost:3001');
        cy.contains('Start Quiz').click();
        cy.wait('@getQuestions');
    
        cy.contains('Which of the following is a mutable data type in Python?').should('be.visible');
      });
    });