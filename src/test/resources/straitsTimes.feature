@StraitsTimes @All

Feature: Straits times page load

Scenario: Load straits times page and redirect to login page
	
	Given User loads straitstimes.com
	When User click on the login link
	Then Login page is loaded
	Then Login with username "prajakta.borade.borade@gmail.com" password "StraitsTimes2018"
	Then Check if login is successful
	Then check if main article has image or video
	Then click on the main article
	Then check if main article is loaded
	Then check if main article has the image or video