var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import React from 'react';
import { Label } from '@atlantum/label';
var StyledDatepicker = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-sizing: border-box;\n    display: block;\n    width: 100%;\n    border-radius: ", ";\n    outline: none;\n\n    border: ", " solid\n        ", ";\n\n    color: ", ";\n    background-color: ", ";\n    padding: ", ";\n    font-size: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n"], ["\n    box-sizing: border-box;\n    display: block;\n    width: 100%;\n    border-radius: ", ";\n    outline: none;\n\n    border: ", " solid\n        ", ";\n\n    color: ", ";\n    background-color: ", ";\n    padding: ", ";\n    font-size: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n"])), function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.spacing.space1; }, function (props) { return props.theme.colors.neutral300; }, function (props) { return props.theme.colors.neutral400; }, function (props) { return props.theme.colors.neutralContentBG; }, function (props) { return props.theme.spacing.space7; }, function (props) { return props.theme.typography.fontSize.base; }, function (props) { return props.theme.typography.family.base; }, function (props) { return props.theme.typography.fontWeight.regular; }, function (props) { return props.theme.typography.lineHeight.base; });
export var Datepicker = function (props) {
    return (React.createElement(Label, { htmlFor: props.id, input: props.input, danger: props.danger, success: props.success, disabled: props.disabled },
        React.createElement("span", { className: "input-label" }, props.label),
        React.createElement(StyledDatepicker, { className: props.className, type: 'date', name: props.name, onChange: props.onChange, disabled: props.disabled, danger: props.danger, success: props.success, placeholder: props.placeholder, value: props.value, defaultValue: props.defaultValue, input: props.input }),
        props.alert && React.createElement("span", { className: "input-alert" }, props.alert)));
};
var templateObject_1;
//# sourceMappingURL=date-picker.js.map