export class exportComplaints_page{

    LgEnterEmail= "input#signInEmail"
    LgEnterPassword= "input#password"
    LgclickLoginBtn= ".login-text"
    LgFeedback= ".nav-links > div:nth-of-type(2) > span"
    LgComplaints= ".mb-2.row.sublinks"
    LgExportBtn= ".export-complaints > span"
    LgExportRange= "div:nth-of-type(1) > .custom-select"
    LgExportFormat= "div:nth-of-type(2) > .custom-select"
    LgExport1month= ".open > div"
    LgExport2month= ".inprogress > div"
    LgExport3month= "div:nth-of-type(3) > .resolved > div"
    LgCustomizeExport= "div:nth-of-type(4) > .resolved > div"
    LgExportFormatCSV= ".inprogress > div"
    LgExportFormatExcel= ".resolved > div"
    LgDownloadBtn= ".modal-btn > span"
    LgDatePickerStart= "div#export-modal  div#modal-content .ng-pristine.ng-untouched.ng-valid > div:nth-of-type(2) > app-date-picker > .date-component  img"
    LgDatePickerEnd= "div:nth-of-type(3) > app-date-picker > .date-component  img"

    //reference the above line in the syntax below using (this.)

    enterEmail(mail){
        cy.get(this.LgEnterEmail).type(mail)
    }
    enterPassword(password){
        cy.get(this.LgEnterPassword).type(password)
    }
    clickLoginBtn(){
        cy.get(this.LgclickLoginBtn).click()
    }
    clickFeedback(){
        cy.get(this.LgFeedback).click()
    }
    clickComplaints(){
        cy.get(this.LgComplaints).click()
    }
    clickExportBtn(){
        cy.get(this.LgExportBtn).should('be.visible').click()
    }
    selectRange(){
        cy.get(this.LgExportRange).should('be.visible').click()
    }
    selectFormatField(){
        cy.get(this.LgExportFormat).click()
    }
    select1month(){
        cy.get(this.LgExport1month).click()
    }
    select2Months(){
        cy.get(this.LgExport2month).click()
    }
    select3Month(){
        cy.get(this.LgExport3month).click()
    }
    selectCSV(){
        cy.get(this.LgExportFormatCSV).click()
    }
    selectExcel(){
        cy.get(this.LgExportFormatExcel).click()
    }
    clickDownloadBtn(){
        cy.get(this.LgDownloadBtn).should('be.visible').click()
    }
    selectCustom(){
        cy.get(this.LgCustomizeExport).click()
    }
    selectStartDate(){
        cy.get(this.LgDatePickerStart).select('1')
    }
    selectEndDate(){
        cy.get(this.LgDatePickerEnd).select('10')
    }
}