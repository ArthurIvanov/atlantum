"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledSpinner = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    width: ", ";\n    height: ", ";\n    align-items: center;\n    justify-content: center;\n\n    & > .atlantum-spinner {\n        display: block;\n        box-sizing: border-box;\n        width: 80%;\n        height: 80%;\n        border-radius: 50%;\n        border: 8px solid;\n\n        ", "\n\n        ", "\n        \n        ", "", "\n        \n        \n\t\tborder-color: ", " transparent;\n        animation: atlantum-spinner 1.2s linear infinite;\n    }\n\n    @keyframes atlantum-spinner {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n"], ["\n    display: flex;\n    width: ", ";\n    height: ", ";\n    align-items: center;\n    justify-content: center;\n\n    & > .atlantum-spinner {\n        display: block;\n        box-sizing: border-box;\n        width: 80%;\n        height: 80%;\n        border-radius: 50%;\n        border: 8px solid;\n\n        ",
    "\n\n        ",
    "\n        \n        ",
    "",
    "\n        \n        \n\t\tborder-color: ", " transparent;\n        animation: atlantum-spinner 1.2s linear infinite;\n    }\n\n    @keyframes atlantum-spinner {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n"])), function (props) { return props.size; }, function (props) { return props.size; }, function (props) {
    return props.size === '16px' &&
        "\n        border-width: 1px;\n        ";
}, function (props) {
    return props.size === '24px' &&
        "\n        border-width: 2px;\n        ";
}, function (props) {
    return props.size === '32px' &&
        "\n        border-width: 2px;\n        ";
}, function (props) {
    return props.size === '64px' &&
        "\n        border-width: 4px;\n        ";
}, function (props) { return props.theme.colors.primary[200]; });
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? '64px' : _b;
    return (react_1.default.createElement(StyledSpinner, { size: size },
        react_1.default.createElement("div", { className: 'atlantum-spinner' })));
};
exports.Spinner = Spinner;
var templateObject_1;
//# sourceMappingURL=spinner.js.map