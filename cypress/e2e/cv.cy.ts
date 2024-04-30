import { API } from './../../src/config/api.config';
describe('Test launch cv', () => {
  it('Visits the cv page', () => {
    cy.intercept(API.cv, {fixture: 'cvs'});
    cy.intercept(API.cv+2, {fixture: 'cv2'});
    cy.visit('/cv');
    cy.get('[data-cy="cardCv"]').should('not.exist');
    cy.get('[data-cy="list"]').children().first().contains('Skander');
    cy.get('[data-cy="list"]').children().first().click();
    cy.get('[data-cy="cardCv"]');
    cy.get('[data-cy="detailsClickButton"]').click({force: true});
    cy.location().should((location) => {
      expect(location.pathname).to.equal('/cv/2');
    });

  });
});
