"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divider = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledDivider = styled_components_1.default.hr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: block;\n    padding: 0;\n    margin: 0;\n    border: none;\n\n    height: 1px;\n    background-color: ", ";\n\n    ", "\n\n    ", "\n"], ["\n    display: block;\n    padding: 0;\n    margin: 0;\n    border: none;\n\n    height: 1px;\n    background-color: ", ";\n\n    ",
    "\n\n    ",
    "\n"])), function (props) { return props.theme.colors.neutral[300]; }, function (props) {
    return props.orientation === 'horizontal' &&
        "\n        width: " + props.length + ";\n        height: 1px;\n    ";
}, function (props) {
    return props.orientation === 'vertical' &&
        "\n        height: " + props.length + ";\n        width: 1px;\n    ";
});
var Divider = function (_a) {
    var orientation = _a.orientation, length = _a.length;
    return (react_1.default.createElement(StyledDivider, { orientation: orientation, length: length }));
};
exports.Divider = Divider;
var templateObject_1;
//# sourceMappingURL=divider.js.map