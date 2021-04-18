var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import React from 'react';
import { Label } from '@atlantum/label';
var StyledInput = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-sizing: border-box;\n    display: block;\n    width: 100%;\n    margin: 0;\n    border-radius: ", ";\n    outline: 0;\n\n    border: ", " solid\n        ", ";\n\n    color: ", ";\n    background-color: ", ";\n    padding: ", ";\n    font-size: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n\n    &::placeholder {\n        color: ", ";\n        font-family: ", ";\n        font-size: ", ";\n        font-weight: ", ";\n    }\n\n    &:hover {\n        border-color: ", ";\n    }\n    &:focus {\n        border-color: ", ";\n        box-shadow: 0 0 0 2px ", ";\n    }\n\n    transition: ", ";\n\n    ", "\n\n    ", "\n    \n    ", "\n"], ["\n    box-sizing: border-box;\n    display: block;\n    width: 100%;\n    margin: 0;\n    border-radius: ", ";\n    outline: 0;\n\n    border: ", " solid\n        ", ";\n\n    color: ", ";\n    background-color: ", ";\n    padding: ", ";\n    font-size: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n\n    &::placeholder {\n        color: ", ";\n        font-family: ", ";\n        font-size: ", ";\n        font-weight: ", ";\n    }\n\n    &:hover {\n        border-color: ", ";\n    }\n    &:focus {\n        border-color: ", ";\n        box-shadow: 0 0 0 2px ", ";\n    }\n\n    transition: ", ";\n\n    ",
    "\n\n    ",
    "\n    \n    ",
    "\n"])), function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.spacing.space1; }, function (props) { return props.theme.colors.neutral300; }, function (props) { return props.theme.colors.neutral400; }, function (props) { return props.theme.colors.neutralContentBG; }, function (props) { return props.theme.spacing.space7; }, function (props) { return props.theme.typography.fontSize.base; }, function (props) { return props.theme.typography.family.base; }, function (props) { return props.theme.typography.fontWeight.regular; }, function (props) { return props.theme.typography.lineHeight.base; }, function (props) { return props.theme.colors.neutral300; }, function (props) { return props.theme.typography.family.base; }, function (props) { return props.theme.typography.fontSize.base; }, function (props) { return props.theme.typography.fontWeight.regular; }, function (props) { return props.theme.colors.primary200; }, function (props) { return props.theme.colors.primary300; }, function (props) { return props.theme.colors.primary100; }, function (props) { return props.theme.animation.base; }, function (props) {
    return props.disabled &&
        "\n        &::placeholder {\n        color: " + props.theme.colors.neutral200 + ";\n        }\n         color: " + props.theme.colors.neutral200 + ";\n         background-color: " + props.theme.colors.neutral100 + ";\n         border-color: " + props.theme.colors.neutral100 + ";\n         cursor: not-allowed;\n         &:hover {    \n            background-color: " + props.theme.colors.neutral100 + ";\n            border-color: " + props.theme.colors.neutral100 + ";\n            box-shadow: none;\n    }\n    ";
}, function (props) {
    return props.danger &&
        " \n        border-color: " + props.theme.colors.danger300 + ";\n        &:focus {\n        border-color: " + props.theme.colors.danger300 + ";\n        }\n         &:hover {\n            border-color: " + props.theme.colors.danger200 + ";         \n    }\n    ";
}, function (props) {
    return props.success &&
        "       \n         border-color: " + props.theme.colors.success300 + ";\n         &:hover {\n            border-color: " + props.theme.colors.success300 + ";         \n    }\n        &:focus {\n        border-color: " + props.theme.colors.success200 + ";\n        }\n    ";
});
export var TextInput = function (props) {
    return (React.createElement(Label, { htmlFor: props.id, input: props.input, danger: props.danger, success: props.success, disabled: props.disabled },
        React.createElement("span", { className: "input-label" }, props.label),
        React.createElement(StyledInput, { className: props.className, type: props.type, name: props.name, onChange: props.onChange, disabled: props.disabled, danger: props.danger, success: props.success, placeholder: props.placeholder, value: props.value, defaultValue: props.defaultValue }),
        props.alert && React.createElement("span", { className: "input-alert" }, props.alert)));
};
var templateObject_1;
//# sourceMappingURL=text-Input.js.map