var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useContext } from 'react';
import styled from 'styled-components';
import TabsContext from './tabs-context';
var StyledTab = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    min-width: 120px;\n    display: block;\n    cursor: pointer;\n    outline: none;\n    text-align: center;\n    background-color: transparent;\n    border-bottom: ", " solid;\n    border-bottom-color: ", ";\n    padding: ", "\n        ", "\n        ", "\n        ", ";\n    color: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    border-radius: ", "\n        ", " 0 0;\n    transition: 0.2s ease;\n\n    &:hover {\n        border-bottom-color: ", ";\n    }\n\n    &:focus {\n        box-shadow: 0 0 0 2px ", ";\n    }\n\n    &.atlantum-tab-selected {\n        border-bottom-color: ", ";\n        color: ", ";\n    }\n"], ["\n    min-width: 120px;\n    display: block;\n    cursor: pointer;\n    outline: none;\n    text-align: center;\n    background-color: transparent;\n    border-bottom: ", " solid;\n    border-bottom-color: ", ";\n    padding: ", "\n        ", "\n        ", "\n        ", ";\n    color: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    border-radius: ", "\n        ", " 0 0;\n    transition: 0.2s ease;\n\n    &:hover {\n        border-bottom-color: ", ";\n    }\n\n    &:focus {\n        box-shadow: 0 0 0 2px ", ";\n    }\n\n    &.atlantum-tab-selected {\n        border-bottom-color: ", ";\n        color: ", ";\n    }\n"])), function (props) { return props.theme.spacing[2]; }, function (props) { return props.theme.colors.neutral[200]; }, function (props) { return props.theme.spacing[8]; }, function (props) { return props.theme.spacing[12]; }, function (props) { return props.theme.spacing[6]; }, function (props) { return props.theme.spacing[12]; }, function (props) { return props.theme.colors.neutral[300]; }, function (props) { return props.theme.typography.fontSize.base; }, function (props) { return props.theme.typography.fontWeight.base; }, function (props) { return props.theme.typography.lineHeight.base; }, function (props) { return props.theme.spacing[8]; }, function (props) { return props.theme.spacing[8]; }, function (props) { return props.theme.colors.neutral[300]; }, function (props) { return props.theme.colors.primary[100]; }, function (props) { return props.theme.colors.primary[200]; }, function (props) { return props.theme.colors.neutral[400]; });
export var Tab = function (_a) {
    var children = _a.children, id = _a.id;
    var _b = useContext(TabsContext), active = _b.active, setActive = _b.setActive;
    var isSelected = active === id;
    return (React.createElement(StyledTab, { role: "tab", "aria-selected": isSelected, "aria-controls": "panel-" + id, id: "tab-" + id, tabIndex: isSelected ? 0 : -1, onClick: function () { return setActive && setActive(id); }, className: isSelected ? "atlantum-tab-selected" : undefined }, children));
};
var templateObject_1;
//# sourceMappingURL=tab.js.map