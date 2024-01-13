This script automate the login and feedback/complaints feature of the seamhealth web application using cypress framework
Cypress is an open source for UI/end to end test automation
REQUIREMENTS:
1.	Install java to the locals and set system variables.
2.	Install node JS (it contain npm as well).
3.	Install desired code editor (e.g Visual code).
ACTIONS:
1.	Create a folder on the project directory on your local.
2.	Launch code editor.
3.	Import the folder into code editor.
4.	Run npm init -y to set up package.json on the cypress project.
5.	Install cypress to the project by running npm install cypress –save-dev.
6.	Open cypress using command npx cypress open and configure your spec files.
7.	Create a test file on e2e folde.
8.	Create page folder and create page objects file in the page folder and store page objects there.
9.	Import your page objects to test file using “import page syntax.
10.	Connect your page objects to test file using a constant variable ( e.g, const login = new login_page()).
11.	Create a fixture file in the fixture folder to store desired data.
12.	Open cypress on the terminal by running “npx cypress open”.
13.	Select the desired browser and select the spect file to run ( this will excecute the test with cypress code runner)


GENERATEBTEST REPORT
Required plugins
1.	Mochawesome libraries (npm install mochawesome –save-dev)
2.	Mochawesome-merge (npm install mochawesome-merge –save-dev)
3.	Mochawesome-report-generator (mochawesome-report-generator –save-dev)
4.	RimRaf, to remove previously generated json report each time the test is run (npm install rimraf –save-dev
Setup/configure cypress.config.js:
In the cypress.config.js, include the reporter option by adding the below setup code;
    "reporter" : "mochawesome",
    "reporterOptions" : {
      "charts" : true,
      "overwrite" : false,
      "Html" : false,
      "json" : true,
      "reportDir" : "cypress/reports"
    }

Setup package.json:
To generate test report in cypress, we need to set up the package.json file to enable cypress to handle the report generator. At the script directory on package.json, we will configure test conditions such as Pretest, test and posttest condition. Pretest conditions will always run before the test and the post test conditions will run after the test. The set up is as below;
-	“Pretest”: “rimraf -rf ./cypress/reports/file.json (this will remove previously generated report)
-	“Test” : “npm  run cypress || npm run posttest” (this will execute cypress test and posttest)
-	“cypress-test” : “cypress run” (this will execute cypress command”
-	“posttest” : “npm run merge-reports && npm run generate-htmlreport” (this will execute all posttest commands)
-	“merger-reports” : “mochawesome-report ./cypress/reports/*.json > ./report1.json” (this will create a json file called report1.json in the root directory and merge it with the main report)
-	“generate-htmlreport” : “marge ./report1.json –reportDir ./cypress/reports” (this will create an html report)
N/B: If we run npm run test using npn run cypress only, it will only execute run cypress actions and if the test fail, the report will not be generated, therefore, it is necessary to continue to generate report even when thebtest fail, so to do this, we need a pipe command (||) to connect the test and posttest, whichnis what I did at the (test command). Also @ Posttest, if I run only merge-reports, it will not also generate html report. To generate html report and then merge report, I have to connect them using && (npm run merge-report && npm run generate-htmlreport).
 After this setup on package.json, I will have to run my test using the command line by running “npm run test” at the terminal root directory. This will run the test and generate a report which can be readable on the project folder in the local.

