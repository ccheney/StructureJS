define(function (require, exports, module) { // jshint ignore:line
    'use strict';

    // Imports
    var Extend = require('structurejs/util/Extend');
    var DOMElement = require('structurejs/display/DOMElement');

    /**
     * TODO: YUIDoc_comment
     *
     * @class ContactView
     * @extends DOMElement
     * @param routerEvent {RouterEvent}
     * @constructor
     **/
    var ContactView = (function () {

        var _super = Extend(ContactView, DOMElement);

        function ContactView(routerEvent) {
            _super.call(this);

            /**
             * @property _routerEvent
             * @type {RouterEvent}
             * @private
             */
            this._routerEvent = routerEvent;
        }

        /**
         * @overridden DOMElement.create
         */
        ContactView.prototype.create = function () {
            _super.prototype.create.call(this, 'templates/contact/ContactTemplate', this._routerEvent.query);

            // Create and add your child objects to this parent class.
        };

        /**
         * @overridden DOMElement.layout
         */
        ContactView.prototype.layout = function () {
            // Layout or update the child objects in this parent class.

            return this;
        };

        /**
         * @overridden DOMElement.enable
         */
        ContactView.prototype.enable = function () {
            if (this.isEnabled === true) { return this; }

            // Enable the child objects and add any event listeners.

            return _super.prototype.enable.call(this);
        };

        /**
         * @overridden DOMElement.disable
         */
        ContactView.prototype.disable = function () {
            if (this.isEnabled === false) { return this; }

            // Disable the child objects and remove any event listeners.

            return _super.prototype.disable.call(this);
        };

        /**
         * @overridden DOMElement.destroy
         */
        ContactView.prototype.destroy = function () {
            // Call destroy on any child objects that is need.
            // This super method will also null out all properties automatically to prevent memory leaks.

            _super.prototype.destroy.call(this);
        };

        return ContactView;
    })();

    module.exports = ContactView;

});
