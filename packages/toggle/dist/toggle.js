"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toggle = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var label_1 = require("@atlantum/label");
var StyledToggle = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: ", ";\n    height: ", ";\n    margin: 0;\n    position: relative;\n    display: block;\n    cursor: pointer;\n    appearance: none;\n    outline: none;\n    border-radius: ", ";\n\n    &:hover {\n        &:before {\n            background-color: ", ";\n        }\n    }\n\n    &:focus {\n        box-shadow: 0 0 0 2px ", ";\n    }\n\n    &:before,\n    &:after {\n        position: absolute;\n        display: block;\n        content: '';\n        border-radius: ", ";\n        top: 0;\n    }\n\n    &:before {\n        width: 100%;\n        height: 100%;\n        transition: 0.4s;\n        background-color: ", ";\n    }\n\n    &:after {\n        width: ", ";\n        height: ", ";\n        transform: translate(2px, 2px);\n        transition: 0.4s;\n        background-color: ", ";\n    }\n\n    &:checked {\n        &:after {\n            transform: translate(16px, 2px);\n        }\n        &:before {\n            background-color: ", ";\n        }\n    }\n\n    ", "\n"], ["\n    width: ", ";\n    height: ", ";\n    margin: 0;\n    position: relative;\n    display: block;\n    cursor: pointer;\n    appearance: none;\n    outline: none;\n    border-radius: ", ";\n\n    &:hover {\n        &:before {\n            background-color: ", ";\n        }\n    }\n\n    &:focus {\n        box-shadow: 0 0 0 2px ", ";\n    }\n\n    &:before,\n    &:after {\n        position: absolute;\n        display: block;\n        content: '';\n        border-radius: ", ";\n        top: 0;\n    }\n\n    &:before {\n        width: 100%;\n        height: 100%;\n        transition: 0.4s;\n        background-color: ", ";\n    }\n\n    &:after {\n        width: ", ";\n        height: ", ";\n        transform: translate(2px, 2px);\n        transition: 0.4s;\n        background-color: ", ";\n    }\n\n    &:checked {\n        &:after {\n            transform: translate(16px, 2px);\n        }\n        &:before {\n            background-color: ", ";\n        }\n    }\n\n    ",
    "\n"])), function (props) { return props.theme.spacing[30]; }, function (props) { return props.theme.spacing[16]; }, function (props) { return props.theme.spacing[32]; }, function (props) { return props.theme.colors.neutral[300]; }, function (props) { return props.theme.colors.primary[100]; }, function (props) { return props.theme.spacing[32]; }, function (props) { return props.theme.colors.neutral[300]; }, function (props) { return props.theme.spacing[12]; }, function (props) { return props.theme.spacing[12]; }, function (props) { return props.theme.colors.neutral[500]; }, function (props) { return props.theme.colors.primary[200]; }, function (props) {
    return props.disabled &&
        "\n        cursor: not-allowed;\n        &:before {\n            background-color: " + props.theme.colors.neutral[100] + ";\n        }\n         &:hover {\n            &:before {\n                background-color: " + props.theme.colors.neutral[100] + ";\n            }\n    }\n        &:after {\n            box-shadow: none;\n            background-color: " + props.theme.colors.neutral[200] + ";\n        }\n         &:checked {\n            &:hover {\n                &:before {\n                    background-color: " + props.theme.colors.neutral[100] + ";\n                }\n            }\n         &:before {\n            background-color: " + props.theme.colors.neutral[100] + ";\n         }\n         &:after {\n            box-shadow: none;\n        }\n    }    \n    \n    ";
});
var Toggle = function (props) {
    return (react_1.default.createElement(label_1.Label, { htmlFor: props.id, input: props.input, danger: props.danger, disabled: props.disabled },
        react_1.default.createElement(StyledToggle, { checked: props.checked, disabled: props.disabled, danger: props.danger, success: props.success, name: props.name, type: 'checkbox', id: props.id, onChange: props.onChange, className: props.className }),
        react_1.default.createElement("span", { className: "input-label" }, props.label)));
};
exports.Toggle = Toggle;
var templateObject_1;
//# sourceMappingURL=toggle.js.map