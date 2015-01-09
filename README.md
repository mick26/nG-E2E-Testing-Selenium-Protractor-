## Why?

A step by step guide to aid learning about how to do end-to-end testing on AngularJS applications using Protractor. Most of the content is got while going through the Protractor examples on the [Protractor Web Site](http://angular.github.io/protractor).


## Angular End-2-End Testing with Protractor


End-to-end or System testing involves checking the flow of an application from start to finish ensuring that each element functions correctly.

For web applications end-2-end testing involves: 

- finding DOM elements 
- interacting with DOM elements
- checking application state


### What is Protractor

[Protractor](http://angular.github.io/protractor) is an end-to-end testing framework for AngularJS applications. Protractor is essentially a wrapper around the [Selenium Web Driver aka Selenium 2](http://docs.seleniumhq.org/projects/webdriver/). Selenium 2 enables a browser to be opened automatically and a test run on it without user intervention.

Protractor allows you to run tests on the browser and compare the actual test results to expected results. Protractor is a [NodeJS](http://nodejs.org/) program so Node needs to be installed. Protractor uses the [Jasmine test framework](http://jasmine.github.io/) for its testing interface. The _describe_ and _it_ syntax in the test files (i.e. _spec_ files) are from Jasmine.
<br/><br/>


#### Locating DOM elements using Protractor.

The __element()__ function is used for finding HTML elements on a webpage. It returns an ElementFinder object. The ElementFinder object can be used to interact with the element or get information from it. __element()__ takes one parameter, a Locator, which describes how to find the element. The __by__ object creates Locators. 


[Protractor Locators](http://angular.github.io/protractor/#/locators) are used with the element() function to specify specific Angular elements:

A locator tells Protractor how to find a certain DOM element. Some _Locators_ are:

+ by.css('.myclass') //find an element using a css selector
+ by.id('myid')      //find an element with the given id
+ by.model('name')   //find an element that matched an ng-model name
+ by.binding('bindingname') //find an element bound to the given variable
<br/><br/>


#### Interacting with DOM elements using Protractor.

__sendKeys(value)__ allows a _value_ to be sent to a HTML &lt;input&gt; field <br/>
__click()__ allows a button to be pressed
<br/><br/>


#### Checking State with Protractor.

__getText()__ allows the value of a DOM element to be read
<br/><br/>



### Getting Started with Protractor

Install _Protractor_ and _Webdriver-manager_ globally:
<pre>npm install -g protractor</pre>

Test installation was ok:
<pre>protractor --version</pre>

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

<br/>

#### To Run a Protractor Test:

<pre>protractor conf.js</pre>

<br/>


### Time for some Tests ###

Check out the test folders



### Main Technologies Used

- [NodeJS](http://nodejs.org/)
- [AngularJS](https://angularjs.org/)
- [Protractor](http://angular.github.io/protractor)
- [Selenium Webdriver](http://docs.seleniumhq.org/projects/webdriver/)
- [Jasmine](http://jasmine.github.io/)

<hr>


Michael Cullen 2015
