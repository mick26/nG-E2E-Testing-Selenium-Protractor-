### 2. Test - Interacting with HTML Elements


#### This is the test2-spec.js test:
<pre>
describe('angularjs homepage', function() {
  it('should add one and two', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);

    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).
        toEqual('5'); // This is wrong! (1+2!=5)
        //toEqual('5'); // This is correct (1+2=3)!
  });
});
</pre>


#### This test does the following:

- Opens Chrome browser 
- Browses to http://juliemr.github.io/protractor-demo/
- Select the HTML DOM element where ng-model="first" (i.e. an input box &lt;input type=text ng-model="first"&gt;)
- send '1' as a value to the input box
- Select the HTML DOM element where ng-model="second" (i.e. an input box &lt;input type=text ng-model="second"&gt;)
- send '2' as a value to the input box
- select HTML element with _id = gobutton_ (i.e. the button &lt;button ng-click="doAddition()" id="gobutton"&gt;)
- Click the button
- Find the element bound (with {{}} / ng-bind) to the variable _latest_ (e.g.    &lt;h2&gt;{{latest}}&lt;/h2&gt; )



Note: When you browse to the [page](http://juliemr.github.io/protractor-demo/) you can see that the default operator used with the two input box values assigned is addition. Thus the test should perform 1 + 2 which should give a result of __3__.


__Run the Protractor Test:__

<pre>protractor conf.js</pre>

<br/>


#### Test Results

<br/>
__For Test expectation:__ 
<pre>expect(element(by.binding('latest')).getText()).
        toEqual('5'); //This is wrong! (1+2!=5)

</pre>


Which should and does fail with the following result:

<pre>
C:\TESTING\End-2-end\Protractor\test2-interacting with HTML Elements>protractor
conf.js
Using the selenium server at http://localhost:4444/wd/hub
F

Failures:

  1) angularjs homepage should add one and two
   Message:
     Expected '3' to equal '5'.
   Stacktrace:
     Error: Failed expectation
    at [object Object].<anonymous> (C:\TESTING\End-2-end\Protractor\test2-intera
cting with HTML Elements\test2-spec.js:17:9)
    at C:\Users\Mick\AppData\Roaming\npm\node_modules\protractor\node_modules\ja
sminewd\index.js:94:14
    at [object Object].webdriver.promise.ControlFlow.runInNewFrame_ (C:\Users\Mi
ck\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\l
ib\webdriver\promise.js:1654:20)
    at [object Object].webdriver.promise.ControlFlow.runEventLoop_ (C:\Users\Mic
k\AppData\Roaming\npm\node_modules\protractor\node_modules\selenium-webdriver\li
b\webdriver\promise.js:1518:8)

Finished in 6.405 seconds
1 test, 1 assertion, 1 failure
</pre>


<br/>
__Now change the Test expectation to:__ 
<pre>expect(element(by.binding('latest')).getText()).
        toEqual('3'); //This is correct (1+2=3)
</pre>


This test should and does pass with the following result:

<pre>
Finished in 6.471 seconds
1 test, 1 assertion, 0 failures
</pre>
