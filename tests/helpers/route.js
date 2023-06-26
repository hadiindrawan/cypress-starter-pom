export function visit(routes) {
    cy.visit(Cypress.env('base_url')) + routes
}