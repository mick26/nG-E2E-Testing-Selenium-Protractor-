## Angular E2E Testing with Protractor


### What is Protractor

[Protractor](http://angular.github.io/protractor) is an end-to-end testing framework for AngularJS applications. Protractor is essentially a wrapper around the [Selenium Web Driver aka Selenium 2](http://docs.seleniumhq.org/projects/webdriver/). Selenium 2 enables a browser to be opened automatically and a test run on it without user intervention.

Protractor allows you to run tests on the browser and compare the actual test results to expected results. Protractor is a [NodeJS](http://nodejs.org/) program so Node needs to be installed. Protractor uses the [Jasmine test framework](http://jasmine.github.io/) for its testing interface. The _describe_ and _it_ syntax in the test files(i.e. _spec_ files) are from Jasmine.



### Getting Started


Install _Protractor_ and _Webdriver-manager_ globally:
<pre>npm install -g protractor</pre>

Test installation was ok:
<pre>protractor --version</pre>


The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with

Check for software updates for _Selenium standalone server_ and _Chromedriver_:
<pre>webdriver-manager update</pre>

Start up _Selenium_ server with:
<pre>webdriver-manager start</pre>

A Protractor test will send requests to this Selenium server. 
You are now ready to run a Protractor test.


### Protractor Test Files

A Protractor test requires 2 files to run:
- spec file
- configuration file

The configuration file tells Protractor where your test files (specs) are and the location of the Selenium Server(i.e. seleniumAddress). Chrome is the default browser.

An example _conf.js_
<pre>
// conf.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js']
}
</pre>



## Time for some Tests ##


### 1. Test - check web page title ###

This test:

- Opens Chrome browser 
- Browses to http://162.248.160.45:1120
- Checks that the title is _Real Time DART Train Info_

<pre>
describe('angularjs homepage', function() {
  it('should have a title', function() {
    browser.get('http://162.248.160.45:1120/');

    expect(browser.getTitle()).toEqual('Real Time DART Train Info');
  });
});
</pre>


__Run the Protractor Test:__

<pre>protractor conf.js</pre>



__If Test Failed__

Finished in 4.178 seconds

1 test, 1 assertion, 1 failure


__If Test Passed__

Finished in 4.477 seconds

1 test, 1 assertion, 0 failures




### Main Technologies Used

- [NodeJS](http://nodejs.org/)
- [AngularJS](https://angularjs.org/)
- [Protractor](http://angular.github.io/protractor)
- [Selenium Webdriver](http://docs.seleniumhq.org/projects/webdriver/)
- [Jasmine](http://jasmine.github.io/)

<hr>


Michael Cullen 2015
