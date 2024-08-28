describe('Retirement Calculator Tests', () => {
    before(() => {
      cy.visit('https://www.securian.com/insights-tools/retirement-calculator.html');
    });
  
    // Test valid data submission
    it('should fill and submit the form with valid data', () => {
      cy.fixture('testData.json').then((data) => {
        // Fill in fields
        cy.scrollTo(0,400)
  
    cy.get('#current-age').type(data.PositiveScenario.currentAge);
       cy.get('#retirement-age').type(data.PositiveScenario.retirementAge);
       cy.get('#current-income').type(data.PositiveScenario.currentAnnualIncome);
        cy.get('#spouse-income').type(data.PositiveScenario.spousesAnnualIncome);
        cy.get('#current-total-savings').type(data.PositiveScenario.currentRetirementSavings);
        cy.get('#current-annual-savings').type(data.PositiveScenario.currentRetirementContribution);
        cy.get('#savings-increase-rate').type(data.PositiveScenario.annualRetirementContributionIncrease);
  
        // Social Security Benefits Toggle
        if (data.PositiveScenario.socialSecurityIncome === "Yes") {
          cy.get('#include-social-container > ul > :nth-child(1) > label').type(data.PositiveScenario.socialSecurityIncome);
          cy.get('#marital-status-ul > :nth-child(2) >label').type(data.PositiveScenario.relationshipStatus);
          cy.get('#social-security-override').type(data.PositiveScenario.socialSecurityOverride);
        } else {
          cy.get('#include-social-container > ul > :nth-child(2) > label').type(data.PositiveScenario.socialSecurityIncome);
        } 
  
       //Submit the form
         cy.get(':nth-child(7) > :nth-child(2) > .col-sm-4 > .dsg-btn-primary').click();
         cy.scrollTo(0,400)
  
        // Verify results or submission
        cy.contains('Results').should('be.visible');
      });
    });
    
        // Social Security Benefits Toggle
       /* if (data.socialSecurityIncome === "Yes") {
          cy.get('#socialSecurityIncomeToggle').check();
          cy.get('#socialSecurityOverride').clear().type(data.socialSecurityOverride);
          cy.get('#additionalOtherIncome').clear().type(data.additionalOtherIncome);
        } else {
          cy.get('#socialSecurityIncomeToggle').uncheck();
        }
  
         //Submit the form
        cy.get('#submitButton').click();
  
        // Verify updated values are reflected
        cy.contains('Updated Results').should('be.visible'); */
      });

