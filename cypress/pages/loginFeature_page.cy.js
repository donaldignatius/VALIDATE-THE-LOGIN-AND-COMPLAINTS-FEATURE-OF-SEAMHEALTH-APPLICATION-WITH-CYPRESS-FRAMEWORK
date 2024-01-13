export class loginFeature_page{

    LgEnterEmail= "input#signInEmail"
    LgEnterPassword= "input#password"
    LgclickLoginBtn= ".login-text"
    LgLogoutInit= ".image-height.initial-name.ml-1"
    LgLogoutBtn= "div#dropoptions > .dropBtn2.rlout"

    //reference the above lines in the syntax below using "this."

    enterEmail(email){
        cy.get(this.LgEnterEmail).type(email)
    }
    enterPassword(password){
        cy.get(this.LgEnterPassword).type(password)
    }
    clickLoginBtn(){
        cy.get(this.LgclickLoginBtn).click()
    }
    invalidLoginBtn(){
        cy.get(this.LgclickLoginBtn).click()
        cy.title().should('eq', 'Quick Start Guide')
    }
    initiateLogout(){
        cy.get(this.LgLogoutInit).click()
        cy.get(this.LgLogoutBtn).click()
    }
}