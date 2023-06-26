class Assert {
    constructor() {}

    visibility(selector) {
        return cy.get(selector).should('be.visible')
    }
}

export default new Assert