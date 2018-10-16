package com.stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefination {
	WebDriver driver;
	@Given("^user is already in login page$")
	public void user_is_on_Login_Page() {
		System.setProperty("webdriver.chrome.driver", "E:\\AUTOMATION TESTING\\TOOLS\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://newtours.demoaut.com/");
		
		
	}
	@When("^title of the login page is mercury tours$")
	public void title_of_loginPAge_Mercury_Tours() {
		String title= driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Welcome: Mercury Tours", title);
		
	}
	@Then("^user provides username$")
	public void user_provide_username() {
		driver.findElement(By.name("userName")).sendKeys("dasd");
	}
	@And("^user Provides Password$")
	public void user_provide_password() {
		driver.findElement(By.name("password")).sendKeys("dasd");
	}
	
	@Then("^Clicks on Sign in Button$")
	public void click_on_sign_in_Button() {
		driver.findElement(By.name("login")).click();
	}
	
	@And("^user is on Booking Page$")
	public void user_is_on_homePage() {
		String actualtitle= driver.getTitle();
		System.out.println(actualtitle);
		Assert.assertEquals("Find a Flight: Mercury Tours:", actualtitle);
	driver.close();
        	

}
}