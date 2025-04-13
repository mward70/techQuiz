import React from 'react'
import Quiz from '../../client/src/components/Quiz'
import { mount } from 'cypress'

describe('<Quiz />', ()=> {
    it('should render the start quiz button', () => {
        mount ("<Quiz />")
        cy.contains('Start Quiz').should('be.visible')
    })
})