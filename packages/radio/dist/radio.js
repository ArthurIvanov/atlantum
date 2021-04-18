var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import React from 'react';
import { Label } from '@atlantum/label';
var StyledRadio = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    outline: none;\n    appearance: none;\n    position: relative;\n    cursor: pointer;\n    display: block;\n    margin: 0;\n    padding: 0;\n    width: ", ";\n    height: ", ";\n    border-radius: 50%;\n    border: ", " solid\n        ", ";\n\n    transition: 0.2s ease;\n\n    &:hover {\n        color: ", ";\n        border-color: ", ";\n        box-shadow: ", ";\n    }\n\n    &:checked {\n        background-color: ", ";\n    }\n\n    &:focus {\n        box-shadow: 0 0 0 2px ", ";\n    }\n\n    &:checked::after {\n        content: '';\n        display: block;\n        background-color: ", ";\n        border-radius: 50%;\n        position: absolute;\n        width: 8px;\n        height: 8px;\n        top: 3px;\n        left: 3px;\n    }\n\n    ", "\n\n    ", "\n    \n     ", "\n"], ["\n    outline: none;\n    appearance: none;\n    position: relative;\n    cursor: pointer;\n    display: block;\n    margin: 0;\n    padding: 0;\n    width: ", ";\n    height: ", ";\n    border-radius: 50%;\n    border: ", " solid\n        ", ";\n\n    transition: 0.2s ease;\n\n    &:hover {\n        color: ", ";\n        border-color: ", ";\n        box-shadow: ", ";\n    }\n\n    &:checked {\n        background-color: ", ";\n    }\n\n    &:focus {\n        box-shadow: 0 0 0 2px ", ";\n    }\n\n    &:checked::after {\n        content: '';\n        display: block;\n        background-color: ", ";\n        border-radius: 50%;\n        position: absolute;\n        width: 8px;\n        height: 8px;\n        top: 3px;\n        left: 3px;\n    }\n\n    ",
    "\n\n    ",
    "\n    \n     ",
    "\n"])), function (props) { return props.theme.spacing.space16; }, function (props) { return props.theme.spacing.space16; }, function (props) { return props.theme.spacing.space1; }, function (props) { return props.theme.colors.neutral300; }, function (props) { return props.theme.colors.neutral400; }, function (props) { return props.theme.colors.neutral400; }, function (props) { return props.theme.elevation.slight; }, function (props) { return props.theme.colors.primary300; }, function (props) { return props.theme.colors.primary100; }, function (props) { return props.theme.colors.neutralContentBG; }, function (props) {
    return props.disabled &&
        "\n         border-color: " + props.theme.colors.neutral100 + ";\n         cursor: not-allowed;\n         &:hover {\n            border-color: " + props.theme.colors.neutral100 + "; \n            box-shadow: none;\n        }\n        &:checked::after{\n            background-color: " + props.theme.colors.neutral200 + ";\n        }\n        &:checked,\n        \n        &:focus {\n            background-color: " + props.theme.colors.neutralGlobalBG + ";\n        }\n    \n\n    \n    ";
}, function (props) {
    return props.danger &&
        "\n         border-color: " + props.theme.colors.danger300 + ";\n         &:hover {\n            border-color: " + props.theme.colors.danger300 + ";          \n    }\n    &:checked,\n    &:focus {\n        outline: none;\n        background-color: " + props.theme.colors.danger300 + ";\n    }\n    \n    &:checked::after {\n        background-color: " + props.theme.colors.neutralContentBG + ";\n    }\n    ";
}, function (props) {
    return props.success &&
        "\n         border-color: " + props.theme.colors.success300 + ";\n         &:hover {\n            border-color: " + props.theme.colors.success300 + ";\n        }\n        &:checked,\n        &:focus {\n\n            outline: none;\n            background-color: " + props.theme.colors.success300 + ";\n        }\n    \n        &:checked::after {\n            background-color: " + props.theme.colors.neutralContentBG + ";\n        }\n        ";
});
export var Radio = function (props, _a) {
    var fontWeight = _a.fontWeight;
    return (React.createElement(Label, { htmlFor: props.id, input: props.input, danger: props.danger, disabled: props.disabled, fontWeight: fontWeight },
        React.createElement(StyledRadio, { checked: props.checked, disabled: props.disabled, danger: props.danger, success: props.success, name: props.name, type: 'radio', id: props.id, onChange: props.onChange, className: props.className }),
        React.createElement("span", { className: "input-label" }, props.label)));
};
var templateObject_1;
//# sourceMappingURL=radio.js.map