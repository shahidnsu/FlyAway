// import { InputFieldComponent } from './../../src/app/components/input-field/input-field.component';

describe('Component Mount Testing', () => {
    // beforeEach(() => {
    //     cy.visit('/');
    // })

    describe('Failed login test', () => {
        it('Should fail login for invalid user', () => {
            cy.visit('/');
            cy.get('[data-cy="trip"]').click();
            cy.get('#login-email').type('123@gmail.com');
            cy.get('#login-password').type('12345678');
            cy.get('[data-cy="login"]').click();
            cy.get('[data-cy="error"]').contains('User Not Found');
        })
    })

    describe('Succesfull login test', () => {
        it('Should success login for valid user', async () => {
            cy.visit('/login');
            // cy.get('[data-cy="trip"]').click();
            cy.get('#login-email').type('test@gmail.com');
            cy.get('#login-password').type('123456');
            cy.get('[data-cy="login"]').click();

            cy.get('#input-from').type('Chittagong - CGP');
            cy.get('[data-cy="to"]').type('SYLHET - ZYL');
            cy.get('[data-cy="date"]').type('2/11/2023');
            cy.get('[data-cy="searchFlight"]').click();
            cy.wait(8000);
            cy.get('.viewFlightsBtn').click({force:true});
            cy.wait(1000);
            cy.get('.stepper').first().click();
            cy.wait(2000);
            cy.get('.button-class').click();
            cy.wait(2000);
            cy.get('[data-cy="confirm"]').click();
            cy.wait(2000);
            cy.get('SubmitButton-IconContainer').click();
        })
    })


})



