"# Retirement_Calculator_Assignment" 

Framework
I have Used Cypress Framework to automate the Retirement Calculator Page.
Steps:-
First I have run the below Commands
1.npm init
2.npm install cypress --save-dev

Project Structure

**Retirement_Calculator.cy.js,Retirement_Calculator_Negative_Scenario.cy.js & Retirement_Calculator_update_values.cy.js are placed under e2e folder**

1.**Retirement_Calculator.cy.js**-This is a Positive Flow  with Positive Values passed from TestData.json file,here I have used toggle (data.PositiveScenario.socialSecurityIncome === "Yes") with positive scenario & then submit the data Successfully.
2.**Retirement_Calculator_Negative_Scenario.cy.js**-This is a Negative Flow with Negative Values passed from TestData.json file & we tested the negative scenario for Retirement age.
3.***Retirement_Calculator_update_values.cy.js**-This is a update Value Check File where the Values are cleared and updated with new Values.
4.**For Videos**
**video: true,** is added in **cypress.config.js file**
Run :-**npx cypress run**
If we have to run every cy.js file individually then run the below command.
**npx cypress open**
5.**TestData.json**-It is placed in fixture file .It consists of Postive scenario & Negative Scenario data

