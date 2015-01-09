### 1. Test - check web page title ###

This test:

- Opens Chrome browser 
- Browses to http://162.248.160.45:1120
- Gets the title of the web page
- Checks that the title is "_Real Time DART Train Info_"

#### This is the test2-spec.js test:
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
