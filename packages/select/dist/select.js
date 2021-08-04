"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_1 = __importDefault(require("react"));
var label_1 = require("@atlantum/label");
var StyledSelect = styled_components_1.default.select(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    appearance: none;\n    outline: none;\n    box-sizing: border-box;\n    display: block;\n    width: 100%;\n    margin: 0;\n    border-radius: ", ";\n    outline: 0;\n\n    border: ", " solid\n        ", ";\n\n    color: ", ";\n    background-color: ", ";\n    padding: ", ";\n    font-size: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n\n    &:hover {\n        border-color: ", ";\n    }\n    &:focus {\n        border-color: ", ";\n        box-shadow: 0 0 0 2px ", ";\n    }\n\n    transition: ", ";\n\n    ", "\n\n    ", "\n\n\t", "\n"], ["\n    appearance: none;\n    outline: none;\n    box-sizing: border-box;\n    display: block;\n    width: 100%;\n    margin: 0;\n    border-radius: ", ";\n    outline: 0;\n\n    border: ", " solid\n        ", ";\n\n    color: ", ";\n    background-color: ", ";\n    padding: ", ";\n    font-size: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n\n    &:hover {\n        border-color: ", ";\n    }\n    &:focus {\n        border-color: ", ";\n        box-shadow: 0 0 0 2px ", ";\n    }\n\n    transition: ", ";\n\n    ",
    "\n\n    ",
    "\n\n\t",
    "\n"])), function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.spacing[1]; }, function (props) { return props.theme.colors.neutral[300]; }, function (props) { return props.theme.colors.neutral[400]; }, function (props) { return props.theme.colors.neutral[500]; }, function (props) { return props.theme.spacing[7]; }, function (props) { return props.theme.typography.fontSize.base; }, function (props) { return props.theme.typography.family.base; }, function (props) { return props.theme.typography.fontWeight.regular; }, function (props) { return props.theme.typography.lineHeight.base; }, function (props) { return props.theme.colors.primary[200]; }, function (props) { return props.theme.colors.primary[300]; }, function (props) { return props.theme.colors.primary[100]; }, function (props) { return props.theme.animation.base; }, function (props) {
    return props.disabled &&
        "\n        &::placeholder {\n        color: " + props.theme.colors.neutral[200] + ";\n        }\n         color: " + props.theme.colors.neutral[200] + ";\n         background-color: " + props.theme.colors.neutral[100] + ";\n         border-color: " + props.theme.colors.neutral[100] + ";\n         cursor: not-allowed;\n         &:hover {    \n            background-color: " + props.theme.colors.neutral[100] + ";\n            border-color: " + props.theme.colors.neutral[100] + ";\n            box-shadow: none;\n    }\n    ";
}, function (props) {
    return props.danger &&
        " \n        border-color: " + props.theme.colors.danger[300] + ";\n        &:focus {\n        border-color: " + props.theme.colors.danger[300] + ";\n        }\n         &:hover {\n            border-color: " + props.theme.colors.danger[200] + ";         \n    }\n    ";
}, function (props) {
    return props.success &&
        "       \n         border-color: " + props.theme.colors.success[300] + ";\n         &:hover {\n            border-color: " + props.theme.colors.success[300] + ";         \n    }\n        &:focus {\n        border-color: " + props.theme.colors.success[200] + ";\n        }\n    ";
});
var Select = function (_a) {
    var id = _a.id, input = _a.input, danger = _a.danger, disabled = _a.disabled, name = _a.name, placeholder = _a.placeholder, children = _a.children, label = _a.label, className = _a.className, alert = _a.alert;
    return (react_1.default.createElement(label_1.Label, { htmlFor: id, input: input, danger: danger, disabled: disabled, className: className },
        react_1.default.createElement("span", { className: "input-label" }, label),
        react_1.default.createElement(StyledSelect, { name: name, type: 'text', id: id },
            react_1.default.createElement("option", null, placeholder),
            react_1.default.createElement("optgroup", null, children)),
        alert && react_1.default.createElement("span", { className: "input-alert" }, alert)));
};
exports.Select = Select;
var templateObject_1;
//# sourceMappingURL=select.js.map