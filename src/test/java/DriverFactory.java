import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class DriverFactory {
	static {
		System.setProperty("webdriver.gecko.driver", "/Users/administrator/prajakta/java-projects/cucmber-test/drivers/geckodriver");
//		System.setProperty("webdriver.chrome.driver", "");
	}
	public static String FIREFOX_DRIVER = "firefox";
	public static String CHROME_DRIVER = "chrome";
	public static WebDriver getDriver(String driverName) {
		WebDriver dr = null;
		if (driverName != null) {
			if (FIREFOX_DRIVER.equalsIgnoreCase(driverName)) {
				dr = new FirefoxDriver();
			} else if (CHROME_DRIVER.equalsIgnoreCase(driverName)) {
				dr = new ChromeDriver();
			}
		}
		return dr;
	}
}
