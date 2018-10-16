$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/AUTOMATION TESTING/PROJECTS/SELENIUM TEST/BDD_Cucumber/src/test/java/Features/Login.Feature");
formatter.feature({
  "line": 1,
  "name": "mercury tours login Feature",
  "description": "",
  "id": "mercury-tours-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Login Scenario",
  "description": "",
  "id": "mercury-tours-login-feature;login-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of the login page is mercury tours",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user provides username",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user Provides Password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Clicks on Sign in Button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on Booking Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 8072689339,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_loginPAge_Mercury_Tours()"
});
formatter.result({
  "duration": 20998426,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_provide_username()"
});
formatter.result({
  "duration": 131837977,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_provide_password()"
});
formatter.result({
  "duration": 113093484,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_on_sign_in_Button()"
});
formatter.result({
  "duration": 12598661618,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_homePage()"
});
formatter.result({
  "duration": 2121983129,
  "status": "passed"
});
});