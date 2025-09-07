/// <reference types="cypress" />


describe('My First Test', () => {
    it('Does not do much!', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       cy.url().should('include', 'AutomationPractice')
    })

    it('Home should be present', ()=>{
        // cy.contains('Home').should('be.visible').click();
    })
  
  })