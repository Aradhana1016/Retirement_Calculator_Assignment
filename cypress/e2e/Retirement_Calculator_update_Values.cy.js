describe('Retirement Calculator Update Values', () => {
    before(() => {
      cy.visit('https://www.securian.com/insights-tools/retirement-calculator.html');
    });

    it('should update the default values', () => {
        cy.fixture('testData.json').then((data) => {
          // Fill in fields with updated values
          cy.get('#current-age').clear().type(data.PositiveScenario.currentAge);
          cy.get('#retirement-age').clear().type(data.PositiveScenario.retirementAge);
          cy.get('#current-income').clear().type(data.PositiveScenario.currentAnnualIncome);
          cy.get('#spouse-income').clear().type(data.PositiveScenario.spousesAnnualIncome);
          cy.get('#current-total-savings').clear().type(data.PositiveScenario.currentRetirementSavings);
          cy.get('#current-annual-savings').clear().type(data.PositiveScenario.currentRetirementContribution);
          cy.get('#savings-increase-rate').clear().type(data.PositiveScenario.annualRetirementContributionIncrease);

          if (data.PositiveScenario.socialSecurityIncome === "Yes") {
            cy.get('#include-social-container > ul > :nth-child(2) > label').type(data.PositiveScenario.socialSecurityIncome1);
            } else {
            cy.get('#include-social-container > ul > :nth-child(1) > label').type(data.PositiveScenario.socialSecurityIncome);
            cy.get('#marital-status-ul > :nth-child(2) >label').type(data.PositiveScenario.relationshipStatus);
            cy.get('#social-security-override').type(data.PositiveScenario.socialSecurityOverride);
          
          } 
    
         //Submit the form
           cy.get(':nth-child(7) > :nth-child(2) > .col-sm-4 > .dsg-btn-primary').click();
           cy.scrollTo(0,400)
    
          // Verify results or submission
          cy.contains('Results').should('be.visible'); 
        }); 
    }); 
});
    