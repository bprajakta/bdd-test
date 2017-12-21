$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('straitsTimes.feature');
formatter.feature({
  "line": 3,
  "name": "Straits times page load",
  "description": "",
  "id": "straits-times-page-load",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@StraitsTimes"
    },
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Load straits times page and redirect to login page",
  "description": "",
  "id": "straits-times-page-load;load-straits-times-page-and-redirect-to-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User loads straitstimes.com",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User click on the login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Login page is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Login with username \"prajakta.borade.borade@gmail.com\" password \"StraitsTimes2018\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Check if login is successful",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "check if main article has image or video",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click on the main article",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "check if main article is loaded",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "check if main article has the image or video",
  "keyword": "Then "
});
formatter.match({
  "location": "StraitsTimesTest.gotoStraitsTimes()"
});
formatter.result({
  "duration": 6055668874,
  "status": "passed"
});
formatter.match({
  "location": "StraitsTimesTest.clickLogin()"
});
formatter.result({
  "duration": 540707741,
  "status": "passed"
});
formatter.match({
  "location": "StraitsTimesTest.checkLoginPageLoaded()"
});
formatter.result({
  "duration": 5004981692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prajakta.borade.borade@gmail.com",
      "offset": 21
    },
    {
      "val": "StraitsTimes2018",
      "offset": 65
    }
  ],
  "location": "StraitsTimesTest.login(String,String)"
});
formatter.result({
  "duration": 27594782,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #j_username\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027babhalea01-mac.local\u0027, ip: \u0027fe80:0:0:0:841:150a:dcbe:62d0%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.3\u0027, java.version: \u00271.8.0_112\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 57.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 68265, moz:profile: /var/folders/jn/th53m4gn7tn..., moz:webdriverClick: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 16.4.0, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 61e0947d-a40e-eb43-8ce0-e47c8b7c25b7\n*** Element info: {Using\u003did, value\u003dj_username}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat StraitsTimesTest.login(StraitsTimesTest.java:35)\n\tat ✽.Then Login with username \"prajakta.borade.borade@gmail.com\" password \"StraitsTimes2018\"(straitsTimes.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "location": "StraitsTimesTest.checkLoginSuccess()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StraitsTimesTest.checkMainArticle()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StraitsTimesTest.click_on_the_main_article()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StraitsTimesTest.checkMainArticleIsLoaded()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StraitsTimesTest.check_if_main_article_has_the_image_or_video()"
});
formatter.result({
  "status": "skipped"
});
});