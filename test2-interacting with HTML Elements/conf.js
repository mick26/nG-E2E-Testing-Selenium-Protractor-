/*
Ref.
http://angular.github.io/protractor/#/tutorial

This configuration file tells Protractor:
1. where your test files (specs) are 
2. where to talk to your Selenium Server (seleniumAddress). 

*/
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test2-spec.js']
};
