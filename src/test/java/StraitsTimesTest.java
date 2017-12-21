import static org.junit.Assert.assertFalse;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;

public class StraitsTimesTest {
	WebDriver driver = DriverFactory.getDriver("firefox");
	String pageLink = null;
	@Given("^User loads straitstimes.com$")
	public void gotoStraitsTimes() {
		System.out.println("Loading straitstimes.com");
		driver.navigate().to("http://www.straitstimes.com");
	}
	
	@When("^User click on the login link$")
	public void clickLogin() {
		driver.findElement(By.cssSelector("nav .navbar-user .menu .nav-login a")).click(); 
	}
	
	@Then("^Login page is loaded$")
	public void checkLoginPageLoaded () throws InterruptedException {
		System.out.println("Check if login page is loaded");
		Thread.sleep(5000L);
//		driver.close();
	}
	
	@Then("Login with username \"(.*)\" password \"(.*)\"")
	public void login(String username, String password) throws InterruptedException {
		driver.findElement(By.id("j_username")).sendKeys(username);
		driver.findElement(By.id("j_password")).sendKeys(password);
		driver.findElement(By.id("loginForm")).submit();
		Thread.sleep(10000L);
	}
	
	@Then("Check if login is successful")
	public void checkLoginSuccess()  {
		System.out.println(driver.getCurrentUrl());
		if(driver.getCurrentUrl().equalsIgnoreCase(
		     "http://www.straitstimes.com/?login=true")){ 
			System.out.println("Login successfull"); 
		} else { 
			assertFalse(true);
			driver.close();
		}
	}
	
	@Then("^check if main article has image or video$")
	public void checkMainArticle () {
		WebElement image = driver.findElement(By.cssSelector(".main-featured-story .media .media-group img"));
		if (image == null) {
			assertFalse(true);
			driver.close();
		}
	}
	
	@Then("^click on the main article$")
	public void click_on_the_main_article() throws InterruptedException {
		WebElement articleLink = driver.findElement(By.cssSelector(".main-featured-story .media a.block-link"));
		if (articleLink != null) {
			pageLink = articleLink.getAttribute("href");
			articleLink.click();
			Thread.sleep(6000L);
		} else {
			assertFalse(true);
			driver.close();
		}
	}
	
	@Then("check if main article is loaded")
	public void checkMainArticleIsLoaded() throws InterruptedException  {
		String currentUrl = driver.getCurrentUrl();
		System.out.println("currentUrl :" + currentUrl);
		System.out.println("pageLink :" + pageLink);
		System.out.println(pageLink);
		if (currentUrl.contains(pageLink)) {
			System.out.println("Main article loaded successfully");
		} else {
			assertFalse(true);
			driver.close();
		}
		Thread.sleep(4000L);
	}
	
	@Then("^check if main article has the image or video$")
	public void check_if_main_article_has_the_image_or_video() {
		WebElement image = driver.findElement(By.cssSelector(".node-article .media-group .file-image img"));
		if (image == null) {
			assertFalse(true);
		} else {
			System.out.println("Image is present");
		}
		driver.close();
	}
 }
