"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_1 = __importDefault(require("react"));
var label_1 = require("@atlantum/label");
var StyledRadio = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    outline: none;\n    appearance: none;\n    position: relative;\n    cursor: pointer;\n    display: block;\n    margin: 0;\n    padding: 0;\n    width: ", ";\n    height: ", ";\n    border-radius: 50%;\n    border: ", " solid\n        ", ";\n\n    transition: 0.2s ease;\n\n    &:hover {\n        color: ", ";\n        border-color: ", ";\n        box-shadow: ", ";\n    }\n\n    &:checked {\n        background-color: ", ";\n    }\n\n    &:focus {\n        box-shadow: 0 0 0 2px ", ";\n    }\n\n    &:checked::after {\n        content: '';\n        display: block;\n        background-color: ", ";\n        border-radius: 50%;\n        position: absolute;\n        width: 8px;\n        height: 8px;\n        top: 3px;\n        left: 3px;\n    }\n\n    ", "\n\n    ", "\n    \n     ", "\n"], ["\n    outline: none;\n    appearance: none;\n    position: relative;\n    cursor: pointer;\n    display: block;\n    margin: 0;\n    padding: 0;\n    width: ", ";\n    height: ", ";\n    border-radius: 50%;\n    border: ", " solid\n        ", ";\n\n    transition: 0.2s ease;\n\n    &:hover {\n        color: ", ";\n        border-color: ", ";\n        box-shadow: ", ";\n    }\n\n    &:checked {\n        background-color: ", ";\n    }\n\n    &:focus {\n        box-shadow: 0 0 0 2px ", ";\n    }\n\n    &:checked::after {\n        content: '';\n        display: block;\n        background-color: ", ";\n        border-radius: 50%;\n        position: absolute;\n        width: 8px;\n        height: 8px;\n        top: 3px;\n        left: 3px;\n    }\n\n    ",
    "\n\n    ",
    "\n    \n     ",
    "\n"])), function (props) { return props.theme.spacing[16]; }, function (props) { return props.theme.spacing[16]; }, function (props) { return props.theme.spacing[1]; }, function (props) { return props.theme.colors.neutral[300]; }, function (props) { return props.theme.colors.neutral[400]; }, function (props) { return props.theme.colors.neutral[400]; }, function (props) { return props.theme.elevation.slight; }, function (props) { return props.theme.colors.primary[300]; }, function (props) { return props.theme.colors.primary[100]; }, function (props) { return props.theme.colors.neutral[500]; }, function (props) {
    return props.disabled &&
        "\n         border-color: " + props.theme.colors.neutral[100] + ";\n         cursor: not-allowed;\n         &:hover {\n            border-color: " + props.theme.colors.neutral[100] + "; \n            box-shadow: none;\n        }\n        &:checked::after{\n            background-color: " + props.theme.colors.neutral[200] + ";\n        }\n        &:checked,\n        \n        &:focus {\n            background-color: " + props.theme.colors.neutral[600] + ";\n        }\n    \n\n    \n    ";
}, function (props) {
    return props.danger &&
        "\n         border-color: " + props.theme.colors.danger[300] + ";\n         &:hover {\n            border-color: " + props.theme.colors.danger[300] + ";          \n    }\n    &:checked,\n    &:focus {\n        outline: none;\n        background-color: " + props.theme.colors.danger[300] + ";\n    }\n    \n    &:checked::after {\n        background-color: " + props.theme.colors.neutral[500] + ";\n    }\n    ";
}, function (props) {
    return props.success &&
        "\n         border-color: " + props.theme.colors.success[300] + ";\n         &:hover {\n            border-color: " + props.theme.colors.success[300] + ";\n        }\n        &:checked,\n        &:focus {\n\n            outline: none;\n            background-color: " + props.theme.colors.success[300] + ";\n        }\n    \n        &:checked::after {\n            background-color: " + props.theme.colors.neutral[500] + ";\n        }\n        ";
});
var Radio = function (props, _a) {
    var fontWeight = _a.fontWeight;
    return (react_1.default.createElement(label_1.Label, { htmlFor: props.id, input: props.input, danger: props.danger, disabled: props.disabled, fontWeight: fontWeight },
        react_1.default.createElement(StyledRadio, { checked: props.checked, disabled: props.disabled, danger: props.danger, success: props.success, name: props.name, type: 'radio', id: props.id, onChange: props.onChange, className: props.className }),
        react_1.default.createElement("span", { className: "input-label" }, props.label)));
};
exports.Radio = Radio;
var templateObject_1;
//# sourceMappingURL=radio.js.map