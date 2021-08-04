"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Datepicker = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_1 = __importDefault(require("react"));
var label_1 = require("@atlantum/label");
var StyledDatepicker = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-sizing: border-box;\n    display: block;\n    width: 100%;\n    border-radius: ", ";\n    outline: none;\n\n    border: ", " solid\n        ", ";\n\n    color: ", ";\n    background-color: ", ";\n    padding: ", ";\n    font-size: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n"], ["\n    box-sizing: border-box;\n    display: block;\n    width: 100%;\n    border-radius: ", ";\n    outline: none;\n\n    border: ", " solid\n        ", ";\n\n    color: ", ";\n    background-color: ", ";\n    padding: ", ";\n    font-size: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n"])), function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.spacing[1]; }, function (props) { return props.theme.colors.neutral[300]; }, function (props) { return props.theme.colors.neutral[400]; }, function (props) { return props.theme.colors.neutral[500]; }, function (props) { return props.theme.spacing[7]; }, function (props) { return props.theme.typography.fontSize.base; }, function (props) { return props.theme.typography.family.base; }, function (props) { return props.theme.typography.fontWeight.regular; }, function (props) { return props.theme.typography.lineHeight.base; });
var Datepicker = function (props) {
    return (react_1.default.createElement(label_1.Label, { htmlFor: props.id, input: props.input, danger: props.danger, success: props.success, disabled: props.disabled },
        react_1.default.createElement("span", { className: "input-label" }, props.label),
        react_1.default.createElement(StyledDatepicker, { className: props.className, type: 'date', name: props.name, onChange: props.onChange, disabled: props.disabled, danger: props.danger, success: props.success, placeholder: props.placeholder, value: props.value, defaultValue: props.defaultValue, input: props.input }),
        props.alert && react_1.default.createElement("span", { className: "input-alert" }, props.alert)));
};
exports.Datepicker = Datepicker;
var templateObject_1;
//# sourceMappingURL=date-picker.js.map