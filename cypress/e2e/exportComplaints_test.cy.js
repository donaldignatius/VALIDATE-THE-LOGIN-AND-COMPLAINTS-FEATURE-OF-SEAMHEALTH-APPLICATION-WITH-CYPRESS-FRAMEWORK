///<reference types= "cypress"/>
import { exportComplaints_page } from "../pages/exportComplaints_page.cy";
describe('valiadte complaint export functionality', ()=> {
    beforeEach(()=> {
        cy.visit('https://patient-satisfaction.seamhealth.support')
    })

    const cp = new exportComplaints_page();

    it('TC-09 - verify that the export button is visible', ()=> {
        cy.fixture('loginData').then((data)=> {
            cp.enterEmail(data.validMail);
            cp.enterPassword(data.validPassword);
            cp.clickLoginBtn();
            cp.clickFeedback();
            cp.clickComplaints();
            cp.clickExportBtn();
        })
    })

    it('TC-10 - verify that export range is visible', ()=> {
        cy.fixture('loginData').then((data)=> {
            cp.enterEmail(data.validMail);
            cp.enterPassword(data.validPassword);
            cp.clickLoginBtn();
            cp.clickFeedback();
            cp.clickComplaints();
            cp.clickExportBtn();
            cp.selectRange();
        })
    })

    it('TC-11 - verify that export range is clickable', ()=> {
        cy.fixture('loginData').then((data)=> {
            cp.enterEmail(data.validMail);
            cp.enterPassword(data.validPassword);
            cp.clickLoginBtn();
            cp.clickFeedback();
            cp.clickComplaints();
            cp.clickExportBtn();
            cp.selectRange();
        })
    })

    it('TC-12 - verify that the download button is visible and clickable', ()=> {
        cy.fixture('loginData').then((data)=> {
            cp.enterEmail(data.validMail);
            cp.enterPassword(data.validPassword);
            cp.clickLoginBtn();
            cp.clickFeedback();
            cp.clickComplaints();
            cp.clickExportBtn();
            cp.selectRange();
            cp.select1month();
            cp.selectFormatField()
            cp.selectCSV();
            cp.clickDownloadBtn();
        })
    })

    it('TC-13 - verify that user can export complaint by 1month with CSV format', ()=> {
        cy.fixture('loginData').then((data)=> {
            cp.enterEmail(data.validMail);
            cp.enterPassword(data.validPassword);
            cp.clickLoginBtn();
            cp.clickFeedback();
            cp.clickComplaints();
            cp.clickExportBtn();
            cp.selectRange();
            cp.select1month();
            cp.selectFormatField()
            cp.selectCSV();
            cp.clickDownloadBtn();
        })
    })

    it('TC-14 - verify that user can export complaint by 1month with Excel format', ()=> {
        cy.fixture('loginData').then((data)=> {
            cp.enterEmail(data.validMail);
            cp.enterPassword(data.validPassword);
            cp.clickLoginBtn();
            cp.clickFeedback();
            cp.clickComplaints();
            cp.clickExportBtn();
            cp.selectRange();
            cp.select1month();
            cp.selectFormatField();
            cp.selectExcel();
            cp.clickDownloadBtn();
        })
    })

    it('TC-15 - verify that user can export complaint by 2month with CSV format', ()=> {
        cy.fixture('loginData').then((data)=> {
            cp.enterEmail(data.validMail);
            cp.enterPassword(data.validPassword);
            cp.clickLoginBtn();
            cp.clickFeedback();
            cp.clickComplaints();
            cp.clickExportBtn();
            cp.selectRange();
            cp.select2Months();
            cp.selectFormatField();
            cp.selectCSV();
            cp.clickDownloadBtn()
        })
    })

    it('TC-16 - verify that user can export complaint by 2month with Excel format', ()=> {
        cy.fixture('loginData').then((data)=> {
            cp.enterEmail(data.validMail);
            cp.enterPassword(data.validPassword);
            cp.clickLoginBtn();
            cp.clickFeedback();
            cp.clickComplaints();
            cp.clickExportBtn();
            cp.selectRange();
            cp.select2Months();
            cp.selectFormatField();
            cp.selectExcel();
            cp.clickDownloadBtn()
        })
    })

    it('TC-17 - verify that user can export complaint by 3month with CSV format', ()=> {
        cy.fixture('loginData').then((data)=> {
            cp.enterEmail(data.validMail);
            cp.enterPassword(data.validPassword);
            cp.clickLoginBtn();
            cp.clickFeedback();
            cp.clickComplaints();
            cp.clickExportBtn();
            cp.selectRange();
            cp.select3Month();
            cp.selectFormatField();
            cp.selectCSV();
            cp.clickDownloadBtn();
        })
    })

    it('TC-18 - verify that user can export complaint by 3month with Excel format', ()=> {
        cy.fixture('loginData').then((data)=> {
            cp.enterEmail(data.validMail);
            cp.enterPassword(data.validPassword);
            cp.clickLoginBtn();
            cp.clickFeedback();
            cp.clickComplaints();
            cp.clickExportBtn();
            cp.selectRange();
            cp.select3Month();
            cp.selectFormatField();
            cp.selectExcel();
            cp.clickDownloadBtn();
        })
    })
})