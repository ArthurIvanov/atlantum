var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import React from 'react';
import { Label } from '@atlantum/label';
var StyledCheckbox = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    appearance: none;\n    position: relative;\n    cursor: pointer;\n    display: block;\n    margin: 0;\n    padding: 0;\n    width: ", ";\n    height: ", ";\n    border-radius: ", ";\n    border: ", " solid\n        ", ";\n\n    transition: 0.2s ease;\n\n    &:hover {\n        color: ", ";\n        border-color: ", ";\n    }\n\n    &:checked {\n        border-color: ", ";\n        background-color: ", ";\n    }\n\n    &:checked::after {\n        content: '';\n        background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e\");\n        display: block;\n        border-radius: ", ";\n        position: absolute;\n        width: ", ";\n        height: ", ";\n        color: ", ";\n        top: -2px;\n        left: -2px;\n    }\n\n    ", "\n\n    ", "\n    \n     ", "\n"], ["\n    appearance: none;\n    position: relative;\n    cursor: pointer;\n    display: block;\n    margin: 0;\n    padding: 0;\n    width: ", ";\n    height: ", ";\n    border-radius: ", ";\n    border: ", " solid\n        ", ";\n\n    transition: 0.2s ease;\n\n    &:hover {\n        color: ", ";\n        border-color: ", ";\n    }\n\n    &:checked {\n        border-color: ", ";\n        background-color: ", ";\n    }\n\n    &:checked::after {\n        content: '';\n        background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e\");\n        display: block;\n        border-radius: ", ";\n        position: absolute;\n        width: ", ";\n        height: ", ";\n        color: ", ";\n        top: -2px;\n        left: -2px;\n    }\n\n    ",
    "\n\n    ",
    "\n    \n     ",
    "\n"])), function (props) { return props.theme.spacing[16]; }, function (props) { return props.theme.spacing[16]; }, function (props) { return props.theme.spacing[2]; }, function (props) { return props.theme.spacing[2]; }, function (props) { return props.theme.colors.neutral[400]; }, function (props) { return props.theme.colors.neutral[400]; }, function (props) { return props.theme.colors.primary[100]; }, function (props) { return props.theme.colors.primary[200]; }, function (props) { return props.theme.colors.primary[200]; }, function (props) { return props.theme.spacing[2]; }, function (props) { return props.theme.spacing[16]; }, function (props) { return props.theme.spacing[16]; }, function (props) { return props.theme.colors.neutral[100]; }, function (props) {
    return props.disabled &&
        "\n         border-color: " + props.theme.colors.neutral[100] + ";\n         cursor: not-allowed;\n         &:hover {\n            border-color: " + props.theme.colors.neutral[100] + ";\n            box-shadow: none;\n    }\n    \n    &:checked {\n        background-color: " + props.theme.colors.neutral[500] + ";       \n        border-color: " + props.theme.colors.neutral[100] + ";\n    }\n    ";
}, function (props) {
    return props.danger &&
        "\n         border-color: " + props.theme.colors.danger[300] + ";\n         &:hover {\n            border-color: " + props.theme.colors.danger[100] + "; \n         \n    }\n    \n    &:checked::after {\n        background-color: " + props.theme.colors.danger[300] + ";\n    }\n    ";
}, function (props) {
    return props.success &&
        "\n         border-color: " + props.theme.colors.success[300] + ";\n         &:hover {\n            border-color: " + props.theme.colors.success[100] + "; \n         \n    }\n    \n    &:checked::after {\n        background-color: " + props.theme.colors.success[300] + ";\n    }\n    ";
});
export var Checkbox = function (props) {
    return (React.createElement(Label, { htmlFor: props.id, input: props.input, danger: props.danger, disabled: props.disabled },
        React.createElement(StyledCheckbox, { className: props.className, checked: props.checked, disabled: props.disabled, danger: props.danger, success: props.success, name: props.name, type: 'checkbox', onChange: props.onChange }),
        React.createElement("span", { className: "input-label" }, props.label)));
};
var templateObject_1;
//# sourceMappingURL=checkbox.js.map