/* jshint node:true */
/* globals describe, it, expect */
'use strict';

var DisplayObjectContainer = require('../../js/display/DisplayObjectContainer');
var DisplayObject = require('../../js/display/DisplayObject');

describe('DisplayObject', function() {

    var displayObjectContainer = new DisplayObjectContainer();

    it('instance of DisplayObject', function() {
        expect(displayObjectContainer instanceof DisplayObject).toEqual(true);
    });

    it('displayObjectContainer.addChild', function() {
        var displayObjectContainer2 = new DisplayObjectContainer();
        displayObjectContainer.addChild(displayObjectContainer2);

        expect(displayObjectContainer.numChildren).toEqual(1);
    });
});
