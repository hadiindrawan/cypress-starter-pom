import Element from '@helpers/elements'
import Assert from '@helpers/assert'
import * as route from '@helpers/route'
import { ROUTES } from '@tests/utils/routes';
import * as page from '@tests/pages/login.page'
import * as data from '@tests/data/login.data'

describe('login', () => {
    beforeEach(() => {
        route.visit(ROUTES.login)
    })

    it("Failed login when user input invalid username or password", () => {
        Element.fill(page.userNameEl, data.invalidData.username)
        Element.fill(page.passwordEl, data.invalidData.password)
        Element.click(page.loginBtnEl)
        Assert.visibility(page.errorMsgEl)
    })
})