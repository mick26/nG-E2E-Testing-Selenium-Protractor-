/*
Ref.
http://angular.github.io/protractor/#/tutorial


describe and it syntax are from Jasmine
browser is a global created by Protractor. 
Used for browser-level commands such as navigation with browser.get
*/

describe('angularjs homepage', function() {
  it('should have a title', function() {
    browser.get('http://162.248.160.45:1120/');

    expect(browser.getTitle()).toEqual('Real Time DART Train Info');
  });
});
