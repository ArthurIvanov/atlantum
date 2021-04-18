var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import React from 'react';
import { Label } from '@atlantum/label';
var StyledSelect = styled.select(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    appearance: none;\n    outline: none;\n    position: relative;\n    display: block;\n    box-sizing: border-box;\n    width: 100%;\n    margin: 0;\n    border-radius: ", ";\n    border: ", " solid\n        ", ";\n\n    color: ", ";\n    background-color: ", ";\n    padding: ", ";\n    font-size: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n"], ["\n    appearance: none;\n    outline: none;\n    position: relative;\n    display: block;\n    box-sizing: border-box;\n    width: 100%;\n    margin: 0;\n    border-radius: ", ";\n    border: ", " solid\n        ", ";\n\n    color: ", ";\n    background-color: ", ";\n    padding: ", ";\n    font-size: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n"])), function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.spacing.space1; }, function (props) { return props.theme.colors.neutralDark; }, function (props) { return props.theme.colors.text; }, function (props) { return props.theme.colors.neutralLighter; }, function (props) { return props.theme.spacing.space8; }, function (props) { return props.theme.typography.fontSize.base; }, function (props) { return props.theme.typography.family.base; }, function (props) { return props.theme.typography.fontWeight.regular; }, function (props) { return props.theme.typography.lineHeight.base; });
export var Select = function (_a) {
    var id = _a.id, input = _a.input, danger = _a.danger, disabled = _a.disabled, name = _a.name, placeholder = _a.placeholder, children = _a.children, label = _a.label, className = _a.className;
    return (React.createElement(Label, { htmlFor: id, input: input, danger: danger, disabled: disabled, className: className },
        React.createElement(StyledSelect, { name: name, type: 'text', id: id },
            React.createElement("option", null, placeholder),
            React.createElement("optgroup", null, children)),
        React.createElement("span", { className: "input-label" }, label)));
};
var templateObject_1;
//# sourceMappingURL=select.js.map