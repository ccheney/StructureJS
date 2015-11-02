/*!

 handlebars v3.0.3

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
!function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):"object"==typeof exports?exports.Handlebars=b():a.Handlebars=b()}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){"use strict";function d(){var a=new g.HandlebarsEnvironment;return m.extend(a,g),a.SafeString=i["default"],a.Exception=k["default"],a.Utils=m,a.escapeExpression=m.escapeExpression,a.VM=o,a.template=function(b){return o.template(b,a)},a}var e=c(7)["default"];b.__esModule=!0;var f=c(1),g=e(f),h=c(2),i=e(h),j=c(3),k=e(j),l=c(4),m=e(l),n=c(5),o=e(n),p=c(6),q=e(p),r=d();r.create=d,q["default"](r),r["default"]=r,b["default"]=r,a.exports=b["default"]},function(a,b,c){"use strict";function d(a,b){this.helpers=a||{},this.partials=b||{},e(this)}function e(a){a.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new k["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')}),a.registerHelper("blockHelperMissing",function(b,c){var d=c.inverse,e=c.fn;if(b===!0)return e(this);if(b===!1||null==b)return d(this);if(o(b))return b.length>0?(c.ids&&(c.ids=[c.name]),a.helpers.each(b,c)):d(this);if(c.data&&c.ids){var g=f(c.data);g.contextPath=i.appendContextPath(c.data.contextPath,c.name),c={data:g}}return e(b,c)}),a.registerHelper("each",function(a,b){function c(b,c,e){j&&(j.key=b,j.index=c,j.first=0===c,j.last=!!e,l&&(j.contextPath=l+b)),h+=d(a[b],{data:j,blockParams:i.blockParams([a[b],b],[l+b,null])})}if(!b)throw new k["default"]("Must pass iterator to #each");var d=b.fn,e=b.inverse,g=0,h="",j=void 0,l=void 0;if(b.data&&b.ids&&(l=i.appendContextPath(b.data.contextPath,b.ids[0])+"."),p(a)&&(a=a.call(this)),b.data&&(j=f(b.data)),a&&"object"==typeof a)if(o(a))for(var m=a.length;m>g;g++)c(g,g,g===a.length-1);else{var n=void 0;for(var q in a)a.hasOwnProperty(q)&&(n&&c(n,g-1),n=q,g++);n&&c(n,g-1,!0)}return 0===g&&(h=e(this)),h}),a.registerHelper("if",function(a,b){return p(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||i.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})}),a.registerHelper("with",function(a,b){p(a)&&(a=a.call(this));var c=b.fn;if(i.isEmpty(a))return b.inverse(this);if(b.data&&b.ids){var d=f(b.data);d.contextPath=i.appendContextPath(b.data.contextPath,b.ids[0]),b={data:d}}return c(a,b)}),a.registerHelper("log",function(b,c){var d=c.data&&null!=c.data.level?parseInt(c.data.level,10):1;a.log(d,b)}),a.registerHelper("lookup",function(a,b){return a&&a[b]})}function f(a){var b=i.extend({},a);return b._parent=a,b}var g=c(7)["default"];b.__esModule=!0,b.HandlebarsEnvironment=d,b.createFrame=f;var h=c(4),i=g(h),j=c(3),k=g(j),l="3.0.1";b.VERSION=l;var m=6;b.COMPILER_REVISION=m;var n={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};b.REVISION_CHANGES=n;var o=i.isArray,p=i.isFunction,q=i.toString,r="[object Object]";d.prototype={constructor:d,logger:s,log:t,registerHelper:function(a,b){if(q.call(a)===r){if(b)throw new k["default"]("Arg not supported with multiple helpers");i.extend(this.helpers,a)}else this.helpers[a]=b},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,b){if(q.call(a)===r)i.extend(this.partials,a);else{if("undefined"==typeof b)throw new k["default"]("Attempting to register a partial as undefined");this.partials[a]=b}},unregisterPartial:function(a){delete this.partials[a]}};var s={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:1,log:function(a,b){if("undefined"!=typeof console&&s.level<=a){var c=s.methodMap[a];(console[c]||console.log).call(console,b)}}};b.logger=s;var t=s.log;b.log=t},function(a,b){"use strict";function c(a){this.string=a}b.__esModule=!0,c.prototype.toString=c.prototype.toHTML=function(){return""+this.string},b["default"]=c,a.exports=b["default"]},function(a,b){"use strict";function c(a,b){var e=b&&b.loc,f=void 0,g=void 0;e&&(f=e.start.line,g=e.start.column,a+=" - "+f+":"+g);for(var h=Error.prototype.constructor.call(this,a),i=0;i<d.length;i++)this[d[i]]=h[d[i]];Error.captureStackTrace&&Error.captureStackTrace(this,c),e&&(this.lineNumber=f,this.column=g)}b.__esModule=!0;var d=["description","fileName","lineNumber","message","name","number","stack"];c.prototype=new Error,b["default"]=c,a.exports=b["default"]},function(a,b){"use strict";function c(a){return j[a]}function d(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}function e(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1}function f(a){if("string"!=typeof a){if(a&&a.toHTML)return a.toHTML();if(null==a)return"";if(!a)return a+"";a=""+a}return l.test(a)?a.replace(k,c):a}function g(a){return a||0===a?o(a)&&0===a.length?!0:!1:!0}function h(a,b){return a.path=b,a}function i(a,b){return(a?a+".":"")+b}b.__esModule=!0,b.extend=d,b.indexOf=e,b.escapeExpression=f,b.isEmpty=g,b.blockParams=h,b.appendContextPath=i;var j={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},k=/[&<>"'`]/g,l=/[&<>"'`]/,m=Object.prototype.toString;b.toString=m;var n=function(a){return"function"==typeof a};n(/x/)&&(b.isFunction=n=function(a){return"function"==typeof a&&"[object Function]"===m.call(a)});var n;b.isFunction=n;var o=Array.isArray||function(a){return a&&"object"==typeof a?"[object Array]"===m.call(a):!1};b.isArray=o},function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=p.COMPILER_REVISION;if(b!==c){if(c>b){var d=p.REVISION_CHANGES[c],e=p.REVISION_CHANGES[b];throw new o["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new o["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){function c(c,d,e){e.hash&&(d=m.extend({},d,e.hash)),c=b.VM.resolvePartial.call(this,c,d,e);var f=b.VM.invokePartial.call(this,c,d,e);if(null==f&&b.compile&&(e.partials[e.name]=b.compile(c,a.compilerOptions,b),f=e.partials[e.name](d,e)),null!=f){if(e.indent){for(var g=f.split("\n"),h=0,i=g.length;i>h&&(g[h]||h+1!==i);h++)g[h]=e.indent+g[h];f=g.join("\n")}return f}throw new o["default"]("The partial "+e.name+" could not be compiled when running in runtime-only mode")}function d(b){var c=void 0===arguments[1]?{}:arguments[1],f=c.data;d._setup(c),!c.partial&&a.useData&&(f=j(b,f));var g=void 0,h=a.useBlockParams?[]:void 0;return a.useDepths&&(g=c.depths?[b].concat(c.depths):[b]),a.main.call(e,b,e.helpers,e.partials,f,h,g)}if(!b)throw new o["default"]("No environment passed to template");if(!a||!a.main)throw new o["default"]("Unknown template object: "+typeof a);b.VM.checkRevision(a.compiler);var e={strict:function(a,b){if(!(b in a))throw new o["default"]('"'+b+'" not defined in '+a);return a[b]},lookup:function(a,b){for(var c=a.length,d=0;c>d;d++)if(a[d]&&null!=a[d][b])return a[d][b]},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:m.escapeExpression,invokePartial:c,fn:function(b){return a[b]},programs:[],program:function(a,b,c,d,e){var g=this.programs[a],h=this.fn(a);return b||e||d||c?g=f(this,a,h,b,c,d,e):g||(g=this.programs[a]=f(this,a,h)),g},data:function(a,b){for(;a&&b--;)a=a._parent;return a},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c=m.extend({},b,a)),c},noop:b.VM.noop,compilerInfo:a.compiler};return d.isTop=!0,d._setup=function(c){c.partial?(e.helpers=c.helpers,e.partials=c.partials):(e.helpers=e.merge(c.helpers,b.helpers),a.usePartial&&(e.partials=e.merge(c.partials,b.partials)))},d._child=function(b,c,d,g){if(a.useBlockParams&&!d)throw new o["default"]("must pass block params");if(a.useDepths&&!g)throw new o["default"]("must pass parent depths");return f(e,b,a[b],c,0,d,g)},d}function f(a,b,c,d,e,f,g){function h(b){var e=void 0===arguments[1]?{}:arguments[1];return c.call(a,b,a.helpers,a.partials,e.data||d,f&&[e.blockParams].concat(f),g&&[b].concat(g))}return h.program=b,h.depth=g?g.length:0,h.blockParams=e||0,h}function g(a,b,c){return a?a.call||c.name||(c.name=a,a=c.partials[a]):a=c.partials[c.name],a}function h(a,b,c){if(c.partial=!0,void 0===a)throw new o["default"]("The partial "+c.name+" could not be found");return a instanceof Function?a(b,c):void 0}function i(){return""}function j(a,b){return b&&"root"in b||(b=b?p.createFrame(b):{},b.root=a),b}var k=c(7)["default"];b.__esModule=!0,b.checkRevision=d,b.template=e,b.wrapProgram=f,b.resolvePartial=g,b.invokePartial=h,b.noop=i;var l=c(4),m=k(l),n=c(3),o=k(n),p=c(1)},function(a,b){(function(c){"use strict";b.__esModule=!0,b["default"]=function(a){var b="undefined"!=typeof c?c:window,d=b.Handlebars;a.noConflict=function(){b.Handlebars===a&&(b.Handlebars=d)}},a.exports=b["default"]}).call(b,function(){return this}())},function(a,b){"use strict";b["default"]=function(a){return a&&a.__esModule?a:{"default":a}},b.__esModule=!0}])});;this["JST"] = this["JST"] || {};

this["JST"]["templates/login/LoginTemplate"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"wrapperFixed wrapper-primaryImage\">\n    <div class=\"frame\">\n        <div class=\"gapTop-primary smallPanel\">\n            <div class=\"well\">\n                <form novalidate=\"novalidate\" class=\"form-horizontal\">\n                    <h2 class=\"hd hd_3 text-center\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n                    <div class=\"control-group\">\n                        <input class=\"required\" type=\"email\" placeholder=\"Email\" name=\"emailAddress\" value=\"\">\n                    </div>\n                    <div class=\"control-group\">\n                        <input class=\"required\" type=\"password\" placeholder=\"Password\" name=\"password\" value=\"\">\n                    </div>\n                    <div class=\"control-group\">\n                        <button type=\"submit\" class=\"btn btn-primary js-loginBtn\">Sign in</button>\n                    </div>\n                    <p><a href=\"#\" class=\"online-only\">Forgot your password?</a></p>\n                </form>\n            </div>\n            <!-- /well -->\n        </div>\n        <!-- /gapTop-primary -->\n    </div>\n    <!-- /frame -->\n</div>\n<!-- /wrapperBackground -->\n";
},"useData":true});;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Stage_1 = require('../vendor/structurejs/ts/display/Stage');
var BaseEvent_1 = require('../vendor/structurejs/ts/event/BaseEvent');
var EventBroker_1 = require('../vendor/structurejs/ts/event/EventBroker');
var GrandparentView_1 = require('./view/GrandparentView');
var EventBubblingApp = (function (_super) {
    __extends(EventBubblingApp, _super);
    function EventBubblingApp() {
        _super.call(this);
        this._grandpaView = null;
        this._$clearButton = null;
        this._$stageMessage = null;
        this._onGlobalEvent = function (baseEvent) {
            console.log("Global event dispatched", baseEvent);
        };
    }
    EventBubblingApp.prototype.create = function () {
        _super.prototype.create.call(this);
        this._grandpaView = new GrandparentView_1.default(this.$element.find('.js-grandParentContent'));
        this.addChild(this._grandpaView);
        this._$clearButton = this.$element.find('.js-clearButton');
        this._$stageMessage = this.$element.find('.js-stageMessage');
    };
    EventBubblingApp.prototype.layout = function () {
        this._$stageMessage.text('');
        this._grandpaView.layout();
        return this;
    };
    EventBubblingApp.prototype.enable = function () {
        if (this.isEnabled === true) {
            return this;
        }
        this.addEventListener(BaseEvent_1.default.CHANGE, this._onBubbled, this);
        EventBroker_1.default.addEventListener(BaseEvent_1.default.CHANGE, this._onGlobalEvent, this);
        this._$clearButton.addEventListener('click', this._onClearClick, this);
        this._grandpaView.enable();
        return _super.prototype.enable.call(this);
    };
    EventBubblingApp.prototype.disable = function () {
        if (this.isEnabled === false) {
            return this;
        }
        this.removeEventListener(BaseEvent_1.default.CHANGE, this._onBubbled, this);
        this._$clearButton.removeEventListener('click', this._onClearClick, this);
        this._grandpaView.disable();
        return _super.prototype.disable.call(this);
    };
    EventBubblingApp.prototype.destroy = function () {
        this._grandpaView.destroy();
        _super.prototype.destroy.call(this);
    };
    EventBubblingApp.prototype._onClearClick = function (event) {
        this.layout();
    };
    EventBubblingApp.prototype._onBubbled = function (baseEvent) {
        var text = '<strong>' + this.getQualifiedClassName() + '</strong> recevied a event.<br/ >';
        text += '<strong>' + baseEvent.currentTarget.getQualifiedClassName() + '</strong> last touched the event.<br/ >';
        text += '<strong>' + baseEvent.target.getQualifiedClassName() + '</strong> sent the event.';
        this._$stageMessage.html(text);
    };
    return EventBubblingApp;
})(Stage_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EventBubblingApp;

},{"../vendor/structurejs/ts/display/Stage":11,"../vendor/structurejs/ts/event/BaseEvent":12,"../vendor/structurejs/ts/event/EventBroker":13,"./view/GrandparentView":4}],2:[function(require,module,exports){
var EventBubblingApp_1 = require('./EventBubblingApp');
$(document).ready(function () {
    var app = new EventBubblingApp_1.default();
    app.appendTo('body');
    window['app'] = app;
});

},{"./EventBubblingApp":1}],3:[function(require,module,exports){
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DOMElement_1 = require('../../vendor/structurejs/ts/display/DOMElement');
var BaseEvent_1 = require('../../vendor/structurejs/ts/event/BaseEvent');
var EventBroker_1 = require('../../vendor/structurejs/ts/event/EventBroker');
var ChildView = (function (_super) {
    __extends(ChildView, _super);
    function ChildView($element) {
        _super.call(this, $element);
        this._$dispatchButton = null;
        this._$sonMessage = null;
        this._$checkbox = null;
    }
    ChildView.prototype.create = function () {
        _super.prototype.create.call(this);
        this._$dispatchButton = this.$element.find('.js-dispatchButton');
        this._$sonMessage = this.$element.find('.js-childMessage');
        this._$checkbox = this.$element.find('[type=checkbox]').first();
    };
    ChildView.prototype.layout = function () {
        this._$sonMessage.text('');
        this._$checkbox.prop('checked', false);
        return this;
    };
    ChildView.prototype.enable = function () {
        if (this.isEnabled === true)
            return;
        this._$dispatchButton.addEventListener('click', this._onButtonClick, this);
        return _super.prototype.enable.call(this);
    };
    ChildView.prototype.disable = function () {
        if (this.isEnabled === false)
            return;
        this._$dispatchButton.removeEventListener('click', this._onButtonClick, this);
        return _super.prototype.disable.call(this);
    };
    ChildView.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    ChildView.prototype._onButtonClick = function (event) {
        event.preventDefault();
        var text = '<strong>' + this.getQualifiedClassName() + '</strong> sent the event.';
        this._$sonMessage.html(text);
        this.dispatchEvent(new BaseEvent_1.default(BaseEvent_1.default.CHANGE, true, true));
        EventBroker_1.default.dispatchEvent(new BaseEvent_1.default(BaseEvent_1.default.CHANGE));
    };
    return ChildView;
})(DOMElement_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChildView;

},{"../../vendor/structurejs/ts/display/DOMElement":8,"../../vendor/structurejs/ts/event/BaseEvent":12,"../../vendor/structurejs/ts/event/EventBroker":13}],4:[function(require,module,exports){
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DOMElement_1 = require('../../vendor/structurejs/ts/display/DOMElement');
var BaseEvent_1 = require('../../vendor/structurejs/ts/event/BaseEvent');
var ParentView_1 = require('./ParentView');
var GrandparentView = (function (_super) {
    __extends(GrandparentView, _super);
    function GrandparentView($element) {
        _super.call(this, $element);
        this._parentView = null;
        this._$grandparentMessage = null;
        this._$checkbox = null;
    }
    GrandparentView.prototype.create = function () {
        _super.prototype.create.call(this);
        this._parentView = new ParentView_1.default(this.$element.find('.js-parentContent'));
        this.addChild(this._parentView);
        this._$grandparentMessage = this.$element.find('.js-grandparentMessage');
        this._$checkbox = this.$element.find('[type=checkbox]').first();
    };
    GrandparentView.prototype.layout = function () {
        this._$grandparentMessage.text('');
        this._$checkbox.prop('checked', false);
        this._parentView.layout();
        return this;
    };
    GrandparentView.prototype.enable = function () {
        if (this.isEnabled === true) {
            return this;
        }
        this.addEventListener(BaseEvent_1.default.CHANGE, this._onBubbled, this);
        this._parentView.enable();
        return _super.prototype.enable.call(this);
    };
    GrandparentView.prototype.disable = function () {
        if (this.isEnabled === false) {
            return this;
        }
        this.removeEventListener(BaseEvent_1.default.CHANGE, this._onBubbled, this);
        this._parentView.disable();
        return _super.prototype.disable.call(this);
    };
    GrandparentView.prototype.destroy = function () {
        this._parentView.destroy();
        _super.prototype.destroy.call(this);
    };
    GrandparentView.prototype._onBubbled = function (baseEvent) {
        var checkbox = this.$element.find('[type=checkbox]').first().prop('checked');
        if (checkbox === true) {
            baseEvent.stopPropagation();
        }
        var text = '<strong>' + this.getQualifiedClassName() + '</strong> recevied a event.<br/ >';
        text += '<strong>' + baseEvent.currentTarget.getQualifiedClassName() + '</strong> last touched the event.<br/ >';
        text += '<strong>' + baseEvent.target.getQualifiedClassName() + '</strong> sent the event.';
        this._$grandparentMessage.html(text);
    };
    return GrandparentView;
})(DOMElement_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GrandparentView;

},{"../../vendor/structurejs/ts/display/DOMElement":8,"../../vendor/structurejs/ts/event/BaseEvent":12,"./ParentView":5}],5:[function(require,module,exports){
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DOMElement_1 = require('../../vendor/structurejs/ts/display/DOMElement');
var BaseEvent_1 = require('../../vendor/structurejs/ts/event/BaseEvent');
var ChildView_1 = require('./ChildView');
var ParentView = (function (_super) {
    __extends(ParentView, _super);
    function ParentView($element) {
        _super.call(this, $element);
        this._childView = null;
        this._$parentMessage = null;
        this._$checkbox = null;
    }
    ParentView.prototype.create = function () {
        _super.prototype.create.call(this);
        this._childView = new ChildView_1.default(this.$element.find('.js-childContent'));
        this.addChild(this._childView);
        this._$parentMessage = this.$element.find('.js-parentMessage');
        this._$checkbox = this.$element.find('[type=checkbox]').first();
    };
    ParentView.prototype.layout = function () {
        this._$parentMessage.text('');
        this._$checkbox.prop('checked', false);
        this._childView.layout();
        return this;
    };
    ParentView.prototype.enable = function () {
        if (this.isEnabled === true) {
            return this;
        }
        this.addEventListener(BaseEvent_1.default.CHANGE, this._onBubbled, this);
        this._childView.enable();
        return _super.prototype.enable.call(this);
    };
    ParentView.prototype.disable = function () {
        if (this.isEnabled === false) {
            return this;
        }
        this.removeEventListener(BaseEvent_1.default.CHANGE, this._onBubbled, this);
        this._childView.disable();
        return _super.prototype.disable.call(this);
    };
    ParentView.prototype.destroy = function () {
        this._childView.destroy();
        _super.prototype.destroy.call(this);
    };
    ParentView.prototype._onBubbled = function (baseEvent) {
        var checkbox = this.$element.find('[type=checkbox]').first().prop('checked');
        if (checkbox === true) {
            baseEvent.stopPropagation();
        }
        var text = '<strong>' + this.getQualifiedClassName() + '</strong> recevied a event.<br/ >';
        text += '<strong>' + baseEvent.currentTarget.getQualifiedClassName() + '</strong> last touched the event.<br/ >';
        text += '<strong>' + baseEvent.target.getQualifiedClassName() + '</strong> sent the event.';
        this._$parentMessage.html(text);
    };
    return ParentView;
})(DOMElement_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ParentView;

},{"../../vendor/structurejs/ts/display/DOMElement":8,"../../vendor/structurejs/ts/event/BaseEvent":12,"./ChildView":3}],6:[function(require,module,exports){
///<reference path='_declare/jquery.d.ts'/>
///<reference path='_declare/handlebars.d.ts'/>
///<reference path='_declare/greensock.d.ts'/>
///<reference path='_declare/jquery.eventListener.d.ts'/>
///<reference path='_declare/log.d.ts'/>
var Util_1 = require('./util/Util');
var BaseObject = (function () {
    function BaseObject() {
        this.sjsId = null;
        this.sjsId = Util_1.default.uniqueId();
    }
    BaseObject.prototype.getQualifiedClassName = function () {
        return Util_1.default.getName(this);
    };
    BaseObject.prototype.destroy = function () {
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                this[key] = null;
            }
        }
    };
    return BaseObject;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BaseObject;

},{"./util/Util":18}],7:[function(require,module,exports){
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseObject_1 = require('./BaseObject');
var ObjectManager = (function (_super) {
    __extends(ObjectManager, _super);
    function ObjectManager() {
        _super.call(this);
        this.isEnabled = false;
    }
    ObjectManager.prototype.enable = function () {
        if (this.isEnabled === true) {
            return this;
        }
        this.isEnabled = true;
        return this;
    };
    ObjectManager.prototype.disable = function () {
        if (this.isEnabled === false) {
            return this;
        }
        this.isEnabled = false;
        return this;
    };
    return ObjectManager;
})(BaseObject_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ObjectManager;

},{"./BaseObject":6}],8:[function(require,module,exports){
(function (global){
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DisplayObjectContainer_1 = require('./DisplayObjectContainer');
var BaseEvent_1 = require('../event/BaseEvent');
var TemplateFactory_1 = require('../util/TemplateFactory');
var ComponentFactory_1 = require('../util/ComponentFactory');
var jQuery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
var DOMElement = (function (_super) {
    __extends(DOMElement, _super);
    function DOMElement(type, params) {
        if (type === void 0) { type = null; }
        if (params === void 0) { params = null; }
        _super.call(this);
        this.checkCount = 0;
        this.element = null;
        this.$element = null;
        this._isReference = false;
        this._type = null;
        this._params = null;
        if (type instanceof jQuery) {
            this.$element = type;
            this.element = this.$element[0];
            this._isReference = true;
        }
        else if (type) {
            this._type = type;
            this._params = params;
        }
    }
    DOMElement.prototype.create = function (type, params) {
        if (type === void 0) { type = 'div'; }
        if (params === void 0) { params = null; }
        type = this._type || type;
        params = this._params || params;
        if (this.isCreated === true) {
            throw new Error('[' + this.getQualifiedClassName() + '] You cannot call the create method manually. It is only called once automatically during the view lifecycle and should only be called once.');
        }
        if (this.$element == null) {
            var html = TemplateFactory_1.default.create(type, params);
            if (html) {
                this.$element = jQuery(html);
            }
            else {
                this.$element = jQuery("<" + type + "/>", params);
            }
        }
        this.element = this.$element[0];
        this.width = this.$element.width();
        this.height = this.$element.height();
        this.setSize(this.width, this.height);
        return this;
    };
    DOMElement.prototype.addChild = function (child) {
        if (this.$element == null) {
            throw new Error('[' + this.getQualifiedClassName() + '] You cannot use the addChild method if the parent object is not added to the DOM.');
        }
        _super.prototype.addChild.call(this, child);
        if (child._isReference === true && child.$element.length === 0) {
            return this;
        }
        if (child.isCreated === false) {
            child.create();
            child.isCreated = true;
        }
        if (child._isReference === false) {
            this.$element.append(child.$element);
        }
        this.onAddedToDom(child);
        return this;
    };
    DOMElement.prototype.addClientSideId = function (child) {
        var type = child.$element.attr('data-sjs-type');
        var id = child.$element.attr('data-sjs-id');
        if (type === void 0) {
            type = [child.getQualifiedClassName()];
            id = [child.sjsId];
        }
        else {
            type = type.split(',');
            id = id.split(',');
            type.push(child.getQualifiedClassName());
            id.push(child.sjsId);
        }
        child.$element.attr('data-sjs-id', id.join(','));
        child.$element.attr('data-sjs-type', type.join(','));
    };
    DOMElement.prototype.removeClientSideId = function (child) {
        var type = child.$element.attr('data-sjs-type');
        var id = child.$element.attr('data-sjs-id');
        var typeList = type.split(',');
        var idList = id.split(',').map(Number);
        var index = idList.indexOf(child.sjsId);
        if (index > -1) {
            typeList.splice(index, 1);
            idList.splice(index, 1);
            child.$element.attr('data-sjs-type', typeList.join(','));
            child.$element.attr('data-sjs-id', idList.join(','));
        }
        return idList.length === 0;
    };
    DOMElement.prototype.onAddedToDom = function (child) {
        var _this = this;
        child.checkCount++;
        if (child.$element.width() === 0 && child.checkCount < 5) {
            setTimeout(function () {
                _this.onAddedToDom(child);
            }, 100);
            return;
        }
        this.addClientSideId(child);
        child.width = child.$element.width();
        child.height = child.$element.height();
        child.setSize(child.width, child.height);
        child.enable();
        child.layout();
        child.dispatchEvent(new BaseEvent_1.default(BaseEvent_1.default.ADDED_TO_STAGE));
    };
    DOMElement.prototype.addChildAt = function (child, index) {
        var children = this.$element.children();
        var length = children.length;
        if (child._isReference === true && child.$element.length === 0) {
            return this;
        }
        if (index < 0 || index >= length) {
            this.addChild(child);
        }
        else {
            if (child.isCreated === false) {
                child.create();
                child.isCreated = true;
            }
            if (child.parent) {
                child.parent.removeChild(child, false);
            }
            this.children.splice(index, 0, child);
            this.numChildren = this.children.length;
            child.parent = this;
            jQuery(children.get(index)).before(child.$element);
            this.onAddedToDom(child);
        }
        return this;
    };
    DOMElement.prototype.swapChildren = function (child1, child2) {
        var child1Index = child1.$element.index();
        var child2Index = child2.$element.index();
        this.addChildAt(child1, child2Index);
        this.addChildAt(child2, child1Index);
        return this;
    };
    DOMElement.prototype.getChildAt = function (index) {
        return _super.prototype.getChildAt.call(this, index);
    };
    DOMElement.prototype.getChild = function (selector) {
        var jQueryElement = this.$element.find(selector).first();
        if (jQueryElement.length === 0) {
            throw new TypeError('[' + this.getQualifiedClassName() + '] getChild(' + selector + ') Cannot find DOM $element');
        }
        var sjsId = parseInt(jQueryElement.attr('data-sjs-id'));
        var domElement = this.getChildByCid(sjsId);
        if (domElement == null) {
            domElement = new DOMElement();
            domElement.$element = jQueryElement;
            this.addClientSideId(domElement);
            domElement.element = jQueryElement[0];
            domElement.isCreated = true;
            _super.prototype.addChild.call(this, domElement);
        }
        return domElement;
    };
    DOMElement.prototype.getChildren = function (selector) {
        if (selector === void 0) { selector = ''; }
        var $child;
        var domElement;
        var $list = this.$element.children(selector);
        var listLength = $list.length;
        for (var i = 0; i < listLength; i++) {
            $child = $list.eq(i);
            if ($child.attr('data-sjs-id') === void 0) {
                domElement = new DOMElement();
                domElement.$element = $child;
                this.addClientSideId(domElement);
                domElement.element = $child.get(0);
                domElement.isCreated = true;
                _super.prototype.addChild.call(this, domElement);
            }
        }
        return this.children;
    };
    DOMElement.prototype.removeChild = function (child, destroy) {
        if (destroy === void 0) { destroy = true; }
        var remove = this.removeClientSideId(child);
        child.disable();
        if (remove === true && child.$element != null) {
            child.$element.unbind();
            child.$element.remove();
        }
        if (destroy === true) {
            child.destroy();
        }
        _super.prototype.removeChild.call(this, child);
        return this;
    };
    DOMElement.prototype.removeChildAt = function (index, destroy) {
        if (destroy === void 0) { destroy = true; }
        this.removeChild(this.getChildAt(index), destroy);
        return this;
    };
    DOMElement.prototype.removeChildren = function (destroy) {
        if (destroy === void 0) { destroy = true; }
        while (this.children.length > 0) {
            this.removeChild(this.children.pop(), destroy);
        }
        this.$element.empty();
        return this;
    };
    DOMElement.prototype.destroy = function () {
        // Note: we can't just call destroy to remove the HTMLElement because there could be other views managing the same HTMLElement.
        /*if (this.$element != null) {
             this.$element.unbind();
             this.$element.remove();
         }*/
        _super.prototype.destroy.call(this);
    };
    DOMElement.prototype.createComponents = function (componentList) {
        var list;
        var createdChildren = [];
        var length = componentList.length;
        var obj;
        for (var i = 0; i < length; i++) {
            obj = componentList[i];
            list = ComponentFactory_1.default.create(this.$element.find(obj.selector), obj.component, this);
            createdChildren = createdChildren.concat(list);
        }
        return createdChildren;
    };
    return DOMElement;
})(DisplayObjectContainer_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DOMElement;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../event/BaseEvent":12,"../util/ComponentFactory":15,"../util/TemplateFactory":17,"./DisplayObjectContainer":10}],9:[function(require,module,exports){
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EventDispatcher_1 = require('../event/EventDispatcher');
var DisplayObject = (function (_super) {
    __extends(DisplayObject, _super);
    function DisplayObject() {
        _super.call(this);
        this.stage = null;
        this.ctx = null;
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.unscaledWidth = 100;
        this.unscaledHeight = 100;
        this.scaleX = 1;
        this.scaleY = 1;
        this.rotation = 0;
        this.alpha = 1;
        this.visible = true;
        this.mouseEnabled = false;
        this.useHandCursor = false;
        this.isCreated = false;
        this.name = null;
    }
    DisplayObject.prototype.create = function () {
        this.isCreated = true;
        return this;
    };
    DisplayObject.prototype.layout = function () {
        return this;
    };
    DisplayObject.prototype.setSize = function (unscaledWidth, unscaledHeight) {
        this.unscaledWidth = unscaledWidth;
        this.unscaledHeight = unscaledHeight;
        return this;
    };
    DisplayObject.prototype.readerStart = function () {
        this.ctx.save();
    };
    DisplayObject.prototype.update = function () {
        if (this.ctx === null || this.alpha <= 0 || this.visible === false)
            return false;
        this.readerStart();
        this.ctx.globalAlpha = this.alpha;
        this.layout();
        this.renderEnd();
    };
    DisplayObject.prototype.renderEnd = function () {
        this.ctx.restore();
    };
    return DisplayObject;
})(EventDispatcher_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DisplayObject;

},{"../event/EventDispatcher":14}],10:[function(require,module,exports){
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DisplayObject_1 = require('./DisplayObject');
var DisplayObjectContainer = (function (_super) {
    __extends(DisplayObjectContainer, _super);
    function DisplayObjectContainer() {
        _super.call(this);
        this.numChildren = 0;
        this.children = [];
        this.mouseChildren = false;
    }
    DisplayObjectContainer.prototype.addChild = function (child) {
        if (child.parent) {
            child.parent.removeChild(child);
        }
        this.children.push(child);
        this.numChildren = this.children.length;
        child.parent = this;
        return this;
    };
    DisplayObjectContainer.prototype.addChildAt = function (child, index) {
        if (child.parent) {
            child.parent.removeChild(child);
        }
        this.children.splice(index, 0, child);
        this.numChildren = this.children.length;
        child.parent = this;
        return this;
    };
    DisplayObjectContainer.prototype.removeChild = function (child) {
        var index = this.getChildIndex(child);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
        this.numChildren = this.children.length;
        child.parent = null;
        return this;
    };
    DisplayObjectContainer.prototype.removeChildren = function () {
        while (this.children.length > 0) {
            this.removeChild(this.children.pop());
        }
        return this;
    };
    DisplayObjectContainer.prototype.swapChildren = function (child1, child2) {
        var child1Index = this.getChildIndex(child1);
        var child2Index = this.getChildIndex(child2);
        this.addChildAt(child1, child2Index);
        this.addChildAt(child2, child1Index);
    };
    DisplayObjectContainer.prototype.swapChildrenAt = function (index1, index2) {
        if (index1 < 0 || index1 < 0 || index1 >= this.numChildren || index2 >= this.numChildren) {
            throw new TypeError('[' + this.getQualifiedClassName() + '] index value(s) cannot be out of bounds. index1 value is ' + index1 + ' index2 value is ' + index2);
        }
        var child1 = this.getChildAt(index1);
        var child2 = this.getChildAt(index2);
        this.swapChildren(child1, child2);
        return this;
    };
    DisplayObjectContainer.prototype.getChildIndex = function (child) {
        return this.children.indexOf(child);
    };
    DisplayObjectContainer.prototype.contains = function (child) {
        return this.children.indexOf(child) >= 0;
    };
    DisplayObjectContainer.prototype.getChildAt = function (index) {
        return this.children[index];
    };
    DisplayObjectContainer.prototype.getChildByCid = function (sjsId) {
        var child = null;
        for (var i = this.numChildren - 1; i >= 0; i--) {
            if (this.children[i].sjsId == sjsId) {
                child = this.children[i];
                break;
            }
        }
        return child;
    };
    return DisplayObjectContainer;
})(DisplayObject_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DisplayObjectContainer;

},{"./DisplayObject":9}],11:[function(require,module,exports){
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DOMElement_1 = require('./DOMElement');
var Stage = (function (_super) {
    __extends(Stage, _super);
    function Stage() {
        _super.call(this);
    }
    Stage.prototype.appendTo = function (type, enabled) {
        if (enabled === void 0) { enabled = true; }
        this.$element = (type instanceof jQuery) ? type : jQuery(type);
        this.addClientSideId(this);
        if (this.isCreated === false) {
            this.create();
            this.isCreated = true;
            if (enabled === false) {
                this.disable();
            }
            else {
                this.enable();
            }
            this.layout();
        }
        return this;
    };
    return Stage;
})(DOMElement_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Stage;

},{"./DOMElement":8}],12:[function(require,module,exports){
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseObject_1 = require('../BaseObject');
var BaseEvent = (function (_super) {
    __extends(BaseEvent, _super);
    function BaseEvent(type, bubbles, cancelable, data) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        if (data === void 0) { data = null; }
        _super.call(this);
        this.type = null;
        this.target = null;
        this.currentTarget = null;
        this.data = null;
        this.bubbles = false;
        this.cancelable = false;
        this.isPropagationStopped = false;
        this.isImmediatePropagationStopped = false;
        this.type = type;
        this.bubbles = bubbles;
        this.cancelable = cancelable;
        this.data = data;
    }
    BaseEvent.prototype.stopPropagation = function () {
        this.isPropagationStopped = true;
    };
    BaseEvent.prototype.stopImmediatePropagation = function () {
        this.stopPropagation();
        this.isImmediatePropagationStopped = true;
    };
    BaseEvent.prototype.clone = function () {
        var clonedBaseModel = new this.constructor(this.type, this.bubbles, this.cancelable, this.data);
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                clonedBaseModel[key] = this[key];
            }
        }
        return clonedBaseModel;
    };
    BaseEvent.ACTIVATE = 'BaseEvent.activate';
    BaseEvent.ADDED = 'BaseEvent.added';
    BaseEvent.ADDED_TO_STAGE = 'BaseEvent.addedToStage';
    BaseEvent.CANCEL = 'BaseEvent.cancel';
    BaseEvent.CHANGE = 'BaseEvent.change';
    BaseEvent.CLEAR = 'BaseEvent.clear';
    BaseEvent.CLOSE = 'BaseEvent.close';
    BaseEvent.CLOSING = 'BaseEvent.closing';
    BaseEvent.COMPLETE = 'BaseEvent.complete';
    BaseEvent.CONNECT = 'BaseEvent.connect';
    BaseEvent.COPY = 'BaseEvent.copy';
    BaseEvent.CUT = 'BaseEvent.cut';
    BaseEvent.DEACTIVATE = 'BaseEvent.deactivate';
    BaseEvent.DISPLAYING = 'BaseEvent.displaying';
    BaseEvent.ENTER_FRAME = 'BaseEvent.enterFrame';
    BaseEvent.EXIT_FRAME = 'BaseEvent.exitFrame';
    BaseEvent.EXITING = 'BaseEvent.exiting';
    BaseEvent.FULLSCREEN = 'BaseEvent.fullScreen';
    BaseEvent.INIT = 'BaseEvent.init';
    BaseEvent.NETWORK_CHANGE = 'BaseEvent.networkChange';
    BaseEvent.OPEN = 'BaseEvent.open';
    BaseEvent.PASTE = 'BaseEvent.paste';
    BaseEvent.PREPARING = 'BaseEvent.preparing';
    BaseEvent.REMOVED = 'BaseEvent.removed';
    BaseEvent.RENDER = 'BaseEvent.render';
    BaseEvent.RESIZE = 'BaseEvent.resize';
    BaseEvent.SELECTED = 'BaseEvent.selected';
    return BaseEvent;
})(BaseObject_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BaseEvent;

},{"../BaseObject":6}],13:[function(require,module,exports){
var EventDispatcher_1 = require('./EventDispatcher');
var BaseEvent_1 = require('./BaseEvent');
var EventBroker = (function () {
    function EventBroker() {
        throw new Error('[EventBroker] Do not instantiate the EventBroker class because it is a static class.');
    }
    EventBroker.addEventListener = function (type, callback, scope, priority) {
        if (priority === void 0) { priority = 0; }
        EventBroker._eventDispatcher.addEventListener(type, callback, scope, priority);
    };
    EventBroker.addEventListenerOnce = function (type, callback, scope, priority) {
        if (priority === void 0) { priority = 0; }
        EventBroker._eventDispatcher.addEventListenerOnce(type, callback, scope, priority);
    };
    EventBroker.removeEventListener = function (type, callback, scope) {
        EventBroker._eventDispatcher.removeEventListener(type, callback, scope);
    };
    EventBroker.dispatchEvent = function (type, data) {
        if (data === void 0) { data = null; }
        var event = type;
        if (typeof event === 'string') {
            event = new BaseEvent_1.default(type, false, false, data);
        }
        event.target = EventBroker;
        event.currentTarget = EventBroker;
        EventBroker._eventDispatcher.dispatchEvent(event);
    };
    EventBroker.hasEventListener = function (type, callback, scope) {
        return EventBroker._eventDispatcher.hasEventListener(type, callback, scope);
    };
    EventBroker.getEventListeners = function () {
        return EventBroker._eventDispatcher.getEventListeners();
    };
    EventBroker._eventDispatcher = new EventDispatcher_1.default();
    return EventBroker;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EventBroker;

},{"./BaseEvent":12,"./EventDispatcher":14}],14:[function(require,module,exports){
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ObjectManager_1 = require('../ObjectManager');
var BaseEvent_1 = require('./BaseEvent');
var EventDispatcher = (function (_super) {
    __extends(EventDispatcher, _super);
    function EventDispatcher() {
        _super.call(this);
        this._listeners = null;
        this.parent = null;
        this._listeners = [];
    }
    EventDispatcher.prototype.addEventListener = function (type, callback, scope, priority) {
        if (priority === void 0) { priority = 0; }
        var list = this._listeners[type];
        if (list == null) {
            this._listeners[type] = list = [];
        }
        var index = 0;
        var listener;
        var i = list.length;
        while (--i > -1) {
            listener = list[i];
            if (listener.callback === callback && listener.scope === scope) {
                list.splice(i, 1);
            }
            else if (index === 0 && listener.priority < priority) {
                index = i + 1;
            }
        }
        list.splice(index, 0, { callback: callback, scope: scope, priority: priority, once: false });
        return this;
    };
    EventDispatcher.prototype.addEventListenerOnce = function (type, callback, scope, priority) {
        if (priority === void 0) { priority = 0; }
        this.addEventListener(type, callback, scope, priority);
        var list = this._listeners[type];
        var listener = list[0];
        listener.once = true;
        return this;
    };
    EventDispatcher.prototype.removeEventListener = function (type, callback, scope) {
        var list = this._listeners[type];
        if (list !== void 0) {
            var i = list.length;
            while (--i > -1) {
                if (list[i].callback === callback && list[i].scope === scope) {
                    list.splice(i, 1);
                    break;
                }
            }
        }
        return this;
    };
    EventDispatcher.prototype.dispatchEvent = function (type, data) {
        if (data === void 0) { data = null; }
        var event = type;
        if (typeof event === 'string') {
            event = new BaseEvent_1.default(type, false, true, data);
        }
        if (event.target == null) {
            event.target = this;
            event.currentTarget = this;
        }
        var list = this._listeners[event.type];
        if (list !== void 0) {
            var i = list.length;
            var listener;
            while (--i > -1) {
                if (event.cancelable === true && event.isImmediatePropagationStopped === true) {
                    break;
                }
                listener = list[i];
                listener.callback.call(listener.scope, event);
                if (listener.once === true) {
                    this.removeEventListener(event.type, listener.callback, listener.scope);
                }
            }
        }
        if (this.parent != null && event.bubbles === true) {
            if (event.cancelable === true && event.isPropagationStopped === true) {
                return this;
            }
            event.currentTarget = this;
            this.parent.dispatchEvent(event);
        }
        return this;
    };
    EventDispatcher.prototype.hasEventListener = function (type, callback, scope) {
        if (this._listeners[type] !== void 0) {
            var listener;
            var numOfCallbacks = this._listeners[type].length;
            for (var i = 0; i < numOfCallbacks; i++) {
                listener = this._listeners[type][i];
                if (listener.callback === callback && listener.scope === scope) {
                    return true;
                }
            }
        }
        return false;
    };
    EventDispatcher.prototype.getEventListeners = function () {
        var str = '';
        var numOfCallbacks;
        var listener;
        for (var type in this._listeners) {
            numOfCallbacks = this._listeners[type].length;
            for (var i = 0; i < numOfCallbacks; i++) {
                listener = this._listeners[type][i];
                if (listener.scope && (typeof listener.scope.getQualifiedClassName === 'function')) {
                    str += '[' + listener.scope.getQualifiedClassName() + ']';
                }
                else {
                    str += '[Unknown]';
                }
                str += " is listen for '" + type + "' event.\n";
            }
        }
        return str;
    };
    EventDispatcher.prototype.destroy = function () {
        this.disable();
        _super.prototype.destroy.call(this);
    };
    return EventDispatcher;
})(ObjectManager_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EventDispatcher;

},{"../ObjectManager":7,"./BaseEvent":12}],15:[function(require,module,exports){
var Util_1 = require('../util/Util');
var ComponentFactory = (function () {
    function ComponentFactory() {
        throw new Error('[ComponentFactory] Do not instantiate the ComponentFactory class because it is a static class.');
    }
    ComponentFactory.create = function ($elements, ComponentClass, scope) {
        if (scope === void 0) { scope = null; }
        var list = [];
        var component;
        var $element;
        var length = $elements.length;
        var types;
        var componentName;
        for (var i = 0; i < length; i++) {
            $element = $elements.eq(i);
            types = $element.attr('data-sjs-type');
            if (types === void 0) {
                component = ComponentFactory._createComponent($element, ComponentClass, scope);
                list.push(component);
            }
            else {
                types = types.split(',');
                componentName = Util_1.default.getName(ComponentClass);
                if (types.indexOf(componentName) === -1) {
                    component = ComponentFactory._createComponent($element, ComponentClass, scope);
                    list.push(component);
                }
            }
        }
        return list;
    };
    ComponentFactory._createComponent = function ($element, ComponentClass, scope) {
        var component = new ComponentClass($element);
        if (scope !== null && component.hasOwnProperty('sjsId') === true) {
            scope.addChild(component);
        }
        return component;
    };
    return ComponentFactory;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ComponentFactory;

},{"../util/Util":18}],16:[function(require,module,exports){
var StringUtil = (function () {
    function StringUtil() {
        throw new Error('[StringUtil] Do not instantiate the StringUtil class because it is a static class.');
    }
    StringUtil.getExtension = function (filename, withDot) {
        if (withDot === void 0) { withDot = false; }
        var num = (withDot === true) ? 0 : 1;
        return filename.slice(filename.lastIndexOf('.') + num, filename.length);
    };
    StringUtil.toSentence = function (str, separator) {
        if (separator === void 0) { separator = ' '; }
        return String(str)
            .replace(/(\d)/g, '$1 ')
            .replace(/([a-z](?=[A-Z]))/g, '$1 ')
            .replace(/[^a-zA-Z0-9 ]/g, ' ')
            .replace(/\s{2,}/g, ' ')
            .replace(/^ | $/g, '')
            .toLowerCase()
            .replace(/\s+/g, separator);
    };
    StringUtil.toCamelCase = function (str) {
        return StringUtil.toSentence(str)
            .replace(/ (\w)/g, function (_, $1) {
            return $1.toUpperCase();
        });
    };
    StringUtil.toPascalCase = function (str) {
        return StringUtil.toCamelCase(str)
            .replace(/^[a-zA-Z]/, function (a, b, c) {
            return a.toUpperCase();
        });
    };
    StringUtil.toConstantCase = function (str) {
        return StringUtil.toSentence(str, '_')
            .toUpperCase();
    };
    StringUtil.createUUID = function () {
        var uuid = ('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0;
            var v = (c == 'x') ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        return uuid;
    };
    StringUtil.queryStringToObject = function (queryString, useParseFloat) {
        if (useParseFloat === void 0) { useParseFloat = true; }
        var params = {};
        var temp = null;
        var str = queryString.substring(queryString.indexOf('?') + 1);
        if (str === '') {
            return null;
        }
        var queries = str.split('&');
        var len = queries.length;
        for (var i = 0; i < len; i++) {
            temp = queries[i].split('=');
            params[temp[0]] = (useParseFloat === true && isNaN(parseFloat(temp[1])) === false) ? parseFloat(temp[1]) : temp[1];
        }
        return params;
    };
    StringUtil.removeAllWhitespace = function (str) {
        return str.replace(/\s+/g, '');
    };
    StringUtil.removeLeadingTrailingWhitespace = function (str) {
        return str.replace(/(^\s+|\s+$)/g, '');
    };
    StringUtil.truncate = function (text, length) {
        if (text.length <= length) {
            return text;
        }
        else {
            return text.substr(0, length) + '...';
        }
    };
    StringUtil.format = function (str) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        var length = rest.length;
        var value = str;
        for (var i = 0; i < length; i++) {
            var reg = new RegExp('\\{' + i + '\\}', 'gm');
            value = value.replace(reg, rest[i]);
        }
        return value;
    };
    StringUtil.paramReplace = function (queryString, name, value) {
        var re = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var delimiter = re.exec(queryString)[0].charAt(0);
        return queryString.replace(re, delimiter + name + '=' + value);
    };
    return StringUtil;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StringUtil;

},{}],17:[function(require,module,exports){
var StringUtil_1 = require('./StringUtil');
var TemplateFactory = (function () {
    function TemplateFactory() {
        throw new Error('[TemplateFactory] Do not instantiate the TemplateFactory class because it is a static class.');
    }
    TemplateFactory.create = function (templatePath, data) {
        if (data === void 0) { data = null; }
        var regex = /^([.#])(.+)/;
        var template = null;
        var isFunctionTemplate = typeof templatePath === 'function';
        var isClassOrIdName = regex.test(templatePath);
        if (isFunctionTemplate) {
            template = templatePath(data);
        }
        else if (isClassOrIdName) {
            templatePath = templatePath.substring(1);
            var htmlString = document.getElementById(templatePath).innerHTML;
            htmlString = StringUtil_1.default.removeLeadingTrailingWhitespace(htmlString);
            if (TemplateFactory.templateEngine == TemplateFactory.UNDERSCORE) {
                var templateMethod = window['_'].template(htmlString);
                template = templateMethod(data);
            }
            else {
                var templateMethod = Handlebars.compile(htmlString);
                template = templateMethod(data);
            }
        }
        else {
            var templateObj = window[TemplateFactory.templateNamespace];
            if (!templateObj) {
                return null;
            }
            var templateFunction = templateObj[templatePath];
            if (templateFunction) {
                template = templateFunction(data);
            }
        }
        return template;
    };
    TemplateFactory.UNDERSCORE = 'underscore';
    TemplateFactory.HANDLEBARS = 'handlebars';
    TemplateFactory.templateEngine = TemplateFactory.HANDLEBARS;
    TemplateFactory.templateNamespace = 'JST';
    return TemplateFactory;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TemplateFactory;

},{"./StringUtil":16}],18:[function(require,module,exports){
var Util = (function () {
    function Util() {
        throw new Error('[Util] Do not instantiate the Util class because it is a static class.');
    }
    Util.uniqueId = function (prefix) {
        if (prefix === void 0) { prefix = null; }
        var id = ++Util._idCounter;
        if (prefix != null) {
            return String(prefix + id);
        }
        else {
            return id;
        }
    };
    Util.deletePropertyFromObject = function (object, value) {
        var list = (value instanceof Array) ? value : [value];
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                var value = object[key];
                if (value instanceof Array) {
                    var array = value;
                    for (var index in array) {
                        Util.deletePropertyFromObject(array[index], list);
                    }
                }
                else if (value instanceof Object) {
                    Util.deletePropertyFromObject(value, list);
                }
                else {
                    for (var listIndex in list) {
                        if (key === list[listIndex]) {
                            delete object[key];
                        }
                    }
                }
            }
        }
        return object;
    };
    Util.renamePropertyOnObject = function (object, oldName, newName) {
        if (object.hasOwnProperty(oldName)) {
            object[newName] = object[oldName];
            delete object[oldName];
        }
        return object;
    };
    Util.clone = function (obj) {
        //other scripts: http://davidwalsh.name/javascript-clone
        //http://oranlooney.com/functional-javascript/
        //http://oranlooney.com/deep-copy-javascript/
        if (null == obj || 'object' != typeof obj) {
            return obj;
        }
        if (obj instanceof Date) {
            var date = new Date();
            date.setTime(obj.getTime());
            return date;
        }
        if (obj instanceof Array) {
            var array = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                array[i] = Util.clone(obj[i]);
            }
            return array;
        }
        if (obj instanceof Object) {
            var copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) {
                    copy[attr] = Util.clone(obj[attr]);
                }
            }
            return copy;
        }
        throw new Error("[Util] Unable to copy obj! Its type isn't supported.");
    };
    Util.toBoolean = function (strNum) {
        var value = (typeof strNum === 'string') ? strNum.toLowerCase() : strNum;
        return (value > 0 || value == 'true' || value == 'yes');
    };
    Util.getName = function (classObject) {
        var type = typeof classObject;
        var value;
        var funcNameRegex = /function ([^\(]+)/;
        if (type === 'object') {
            var results = classObject.constructor.toString().match(funcNameRegex);
            value = results[1];
        }
        else {
            var isFunction = (type === 'function');
            var name = isFunction && ((classObject.name && ['', classObject.name]) || classObject.toString().match(funcNameRegex));
            if (isFunction === false) {
                value = type;
            }
            else if (name && name[1]) {
                value = name[1];
            }
            else {
                value = 'anonymous';
            }
        }
        return value;
    };
    Util.debounce = function (callback, wait, immediate, callbackScope) {
        var timeout;
        var result;
        var debounced = function () {
            var args = arguments;
            function delayed() {
                if (immediate == false) {
                    result = callback.apply(callbackScope, args);
                }
                timeout = null;
            }
            if (timeout) {
                clearTimeout(timeout);
            }
            else if (immediate === true) {
                result = callback.apply(callbackScope, args);
            }
            timeout = setTimeout(delayed, wait);
            return result;
        };
        debounced.cancel = function () {
            clearTimeout(timeout);
        };
        return debounced;
    };
    Util._idCounter = 0;
    return Util;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Util;

},{}]},{},[2]);
