package test_runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	@RunWith(Cucumber.class)
@CucumberOptions(
		features = "E:\\AUTOMATION TESTING\\PROJECTS\\SELENIUM TEST\\BDD_Cucumber\\src\\test\\java\\Features\\Login.Feature",
		glue={"com.stepDefination"},
		format= {"pretty","html:test-outout"}
		)


public class TestRunner {

}
