import React from 'react';
import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react18'

describe('<Quiz />', ()=> {
    it('should render the start quiz button', () => {
        mount (<Quiz />);
        cy.contains('Start Quiz').should('be.visible');
    })
})