"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mapObject_1 = tslib_1.__importDefault(require("../mapObject"));
describe('mapObject', function () {
    test('basic', function () {
        var obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
        var func1 = function (value, key) {
            var _a;
            return (_a = {}, _a[key] = value - 1, _a);
        };
        var result = mapObject_1.default(obj1, func1);
        expect(result).not.toBe(obj1);
        expect(Object.keys(result)).toHaveLength(5);
        expect(result).toEqual({ a: 0, b: 1, c: 2, d: 3, e: 4 });
    });
    test('with value skipping', function () {
        var obj1 = { a: 1, b: 2, c: null };
        var func1 = function func(value, key) {
            var _a;
            if (value === null) {
                return null;
            }
            return _a = {}, _a[key] = value - 1, _a;
        };
        var result = mapObject_1.default(obj1, func1);
        expect(result).not.toBe(obj1);
        expect(Object.keys(result)).toHaveLength(2);
        expect(result).toEqual({ a: 0, b: 1 });
    });
});
//# sourceMappingURL=mapObject.js.map