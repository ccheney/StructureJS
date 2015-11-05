define(function (require, exports, module) { // jshint ignore:line
    'use strict';

    // Imports
    var Extend = require('structurejs/util/Extend');
    var DOMElement = require('structurejs/display/DOMElement');

    /**
     * TODO: YUIDoc_comment
     *
     * @class AboutView
     * @extends DOMElement
     * @constructor
     **/
    var AboutView = (function () {

        var _super = Extend(AboutView, DOMElement);

        function AboutView() {
            _super.call(this);
        }

        /**
         * @overridden DOMElement.create
         */
        AboutView.prototype.create = function () {
            _super.prototype.create.call(this, 'templates/about/AboutTemplate');

            // Create and add your child objects to this parent class.
        };

        /**
         * @overridden DOMElement.layout
         */
        AboutView.prototype.layout = function () {
            // Layout or update the child objects in this parent class.

            return this;
        };

        /**
         * @overridden DOMElement.enable
         */
        AboutView.prototype.enable = function () {
            if (this.isEnabled === true) { return this; }

            // Enable the child objects and add any event listeners.

            return _super.prototype.enable.call(this);
        };

        /**
         * @overridden DOMElement.disable
         */
        AboutView.prototype.disable = function () {
            if (this.isEnabled === false) { return this; }

            // Disable the child objects and remove any event listeners.

            return _super.prototype.disable.call(this);
        };

        /**
         * @overridden DOMElement.destroy
         */
        AboutView.prototype.destroy = function () {
            // Call destroy on any child objects that is need.
            // This super method will also null out all properties automatically to prevent memory leaks.

            _super.prototype.destroy.call(this);
        };

        return AboutView;
    })();

    module.exports = AboutView;

});
