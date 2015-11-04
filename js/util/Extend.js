(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports"], function (require, exports) {
    /**
     * A helper method to extend classes.
     *
     * @class Extend
     * @module StructureJS
     * @submodule util
     * @param inheritorClass
     * @param baseClass
     * @returns {*}
     * @constructor
     * @example
     *     var AnotherClass = (function () {
     *
     *         var _super = Extend(AnotherClass, BaseClass);
     *
     *         function AnotherClass() {
     *             _super.call(this);
     *         }
     *
     *         return AnotherClass;
     *     })();
     */
    var Extend = function(inheritorClass, b) {
        var baseClass = (b.hasOwnProperty('__esModule') === true) ? b.default : b;

        for (var property in baseClass) {
            if (baseClass.hasOwnProperty(property)) {
                inheritorClass[property] = baseClass[property];
            }
        }

        function __() {
            this.constructor = inheritorClass;
        }

        inheritorClass.prototype = (baseClass === null) ? Object.create(baseClass) : (__.prototype = baseClass.prototype, new __());

        return baseClass;
    };

    return Extend;
});
