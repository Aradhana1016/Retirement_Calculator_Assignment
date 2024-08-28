describe('Retirement Calculator negative Tests', () => {
    before(() => {
      cy.visit('https://www.securian.com/insights-tools/retirement-calculator.html');
    });

    it('should validate error messages for invalid data', () => {
        cy.fixture('TestData.json').then((data) => {
          // Fill in fields with invalid data
          cy.scrollTo(0,400)
         cy.get('#current-age').type(data.NegativeScenario.currentAge);
         cy.get('#retirement-age').type(data.NegativeScenario.retirementAge);
         cy.get('#current-income').type(data.NegativeScenario.currentAnnualIncome);
          cy.get('#spouse-income').type(data.NegativeScenario.spousesAnnualIncome);
          cy.get('#current-total-savings').type(data.NegativeScenario.currentRetirementSavings);
          cy.get('#current-annual-savings').type(data.NegativeScenario.currentRetirementContribution);
          cy.get('#savings-increase-rate').type('0.25');
          //cy.get(':nth-child(7) > :nth-child(2) > .col-sm-4 > .dsg-btn-primary').click();
          cy.scrollTo(200,400)
          cy.get(':nth-child(7) > :nth-child(2) > .col-sm-4 > .dsg-btn-primary').click();    
       });
      });
    });