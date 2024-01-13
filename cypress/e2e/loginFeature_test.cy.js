///<reference types= "cypress"/>
import { loginFeature_page } from "../pages/loginFeature_page.cy";
describe('validating the login functionality of SeamHealth user interface', ()=> {
    beforeEach(()=> {
        cy.visit("https://patient-satisfaction.seamhealth.support");
        cy.wait(1000)
    })

    const lg = new loginFeature_page();

    it('TC_01 - validate that user can login with valid credentials', ()=> {
        cy.fixture('loginData').then((data)=>{
            lg.enterEmail(data.validMail);
            lg.enterPassword(data.validPassword);
            lg.clickLoginBtn()
        })
    })

    it.only('TC_02 - validate that user cannot login with a valid mail and a invalid password', ()=> {
        cy.fixture('loginData').then((data)=>{
            lg.enterEmail(data.validMail);
            lg.enterPassword(data.invalidPassword);
            lg.clickLoginBtn()
        })
    })

    it('TC_03 - validate that user cannot login with an invalid mail and valid password', ()=> {
        cy.fixture('loginData').then((data)=>{
            lg.enterEmail(data.invalidEmail);
            lg.enterPassword(data.validPassword);
            lg.clickLoginBtn()
        })
    })

    it('TC_04 - validate that user cannot login with an invalid mail and invalid password', ()=> {
        cy.fixture('loginData').then((data)=>{
            lg.enterEmail(data.invalidEmail);
            lg.enterPassword(data.invalidPassword);
            lg.clickLoginBtn()
        })
    })

    it('TC_05 - validate that user cannot login with a valid mail and empty password', ()=> {
        cy.fixture('loginData').then((data)=>{
            lg.enterEmail(data.validMail);
            lg.clickLoginBtn()
        })
    })

    it('TC_06 - validate that user cannot login with an empty mail and a valid password', ()=> {
        cy.fixture('loginData').then((data)=>{
            lg.enterPassword(data.validPassword);
            lg.clickLoginBtn()
        })
    })

    it('TC_07 - validate that user cannot login with empty mail and empty password', ()=> {
        cy.fixture('loginData').then((data)=>{
            lg.clickLoginBtn()
        })
    })

    it('TC_08 - validate that user can logout after a successful login', ()=> {
        cy.fixture('loginData').then((data)=>{
            lg.enterEmail(data.validMail);
            lg.enterPassword(data.invalidPassword);
            lg.clickLoginBtn()
            lg.initiateLogout
        })
    })
})