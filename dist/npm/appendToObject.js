"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var objectAssign_1 = tslib_1.__importDefault(require("ponyfills/objectAssign"));
function appendToObject(instance) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return objectAssign_1.default.apply(void 0, tslib_1.__spread([{}, instance], values));
}
exports.default = appendToObject;
//# sourceMappingURL=appendToObject.js.map