"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var dropFromObject_1 = tslib_1.__importDefault(require("../dropFromObject"));
describe('dropFromObject', function () {
    test('basic', function () {
        var obj1 = { a: 1, b: 2, c: 3 };
        var int1 = 1;
        var result = dropFromObject_1.default(obj1, int1);
        expect(result).not.toBe(obj1);
        expect(Object.keys(result)).toHaveLength(2);
        expect(result).toEqual({ b: 2, c: 3 });
    });
});
//# sourceMappingURL=dropFromObject.js.map