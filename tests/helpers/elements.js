class Element {
    constructor() {}

    get(selector) {
        return cy.get(selector)
    }

    fill(selector, value) {
        return cy.get(selector).clear().type(value).should('have.value', value)
    }

    click(selector, ...args) {
        return cy.get(selector).click(...args)
    }
}

export default new Element