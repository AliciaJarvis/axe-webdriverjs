var WebDriver = require('selenium-webdriver');

function runWebdriver() {
	var	webdriver;
	if (process.env.REMOTE_SELENIUM_URL) {
		webdriver = new WebDriver.Builder()
		.forBrowser('firefox')
		.usingServer(process.env.REMOTE_SELENIUM_URL)
		.build();
	} else {
		webdriver = new WebDriver.Builder()
		.forBrowser('firefox')
		.build();
	}

	return webdriver;
}

module.exports = runWebdriver;