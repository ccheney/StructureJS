var BaseObject = require('../js/BaseObject');

describe("BaseObject", function() {

    var baseObject = new BaseObject();

    it("baseObject.sjsId", function() {
        expect(baseObject.sjsId).toEqual(1);
    });

    it("baseObject.getQualifiedClassName()", function() {
        expect(baseObject.getQualifiedClassName()).toEqual('BaseObject');
    });

    it("baseObject.destroy()", function() {
        baseObject.destroy();
        expect(baseObject.sjsId).toEqual(null);
    });
});
//http://net.tutsplus.com/tutorials/javascript-ajax/testing-your-javascript-with-jasmine/
