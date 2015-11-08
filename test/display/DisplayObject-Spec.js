/* jshint node:true */
/* globals describe, it, expect */
'use strict';

var DisplayObject = require('../../js/display/DisplayObject');
var EventDispatcher = require('../../js/event/EventDispatcher');

describe('DisplayObject', function() {

    var displayObject = new DisplayObject();

    it('instance of EventDispatcher', function() {
        expect(displayObject instanceof EventDispatcher).toEqual(true);
    });

    it('displayObject.create', function() {
        displayObject.create();

        expect(displayObject.isCreated).toEqual(true);
    });
});
