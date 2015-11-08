/* jshint node:true */
'use strict';

var assert = require('assert');
var webdriver = require('selenium-webdriver');

describe('testing javascript in the browser', function() {
    beforeEach(function() {
        if (process.env.SAUCE_USERNAME != null) {
            this.browser = new webdriver.Builder()
                .usingServer('http://' + process.env.SAUCE_USERNAME + ':' + process.env.SAUCE_ACCESS_KEY + '@ondemand.saucelabs.com:80/wd/hub')
                .withCapabilities({
                    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
                    build: process.env.TRAVIS_BUILD_NUMBER,
                    username: process.env.SAUCE_USERNAME,
                    accessKey: process.env.SAUCE_ACCESS_KEY,
                    browserName: 'chrome'
                }).build();
        } else {
            this.browser = new webdriver.Builder()
                .withCapabilities({
                    browserName: 'chrome'
                }).build();
        }

        return this.browser.get('http://localhost:8000/web/index.html');
    });

    afterEach(function() {
        return this.browser.quit();
    });

    it('should handle clicking on a headline', function(done) {
        var headline1 = this.browser.findElement(webdriver.By.id('sjsId1'));
        var headline2 = this.browser.findElement(webdriver.By.id('sjsId2'));

        // headline.click();

        headline1.getText().then(function(txt) {
            assert.equal(txt, 'robert is cool 1');
            done();
        });

        headline2.getText().then(function(txt) {
            assert.equal(txt, 'robert is cool 2');
            done();
        });
    });
});
