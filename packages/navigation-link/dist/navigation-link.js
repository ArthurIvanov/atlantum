var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import React from 'react';
var StyledNavigationLink = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    padding: ", "\n        ", ";\n    text-decoration: none;\n    cursor: pointer;\n    border-radius: ", ";\n    color: ", ";\n    transition: 0.2s ease;\n    &:hover {\n        color: ", ";\n    }\n    &:focus {\n        box-shadow: 0 0 0 2px ", ";\n        color: ", ";\n    }\n"], ["\n    display: flex;\n    padding: ", "\n        ", ";\n    text-decoration: none;\n    cursor: pointer;\n    border-radius: ", ";\n    color: ", ";\n    transition: 0.2s ease;\n    &:hover {\n        color: ", ";\n    }\n    &:focus {\n        box-shadow: 0 0 0 2px ", ";\n        color: ", ";\n    }\n"])), function (props) { return props.theme.spacing[8]; }, function (props) { return props.theme.spacing[24]; }, function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.colors.neutral[400]; }, function (props) { return props.theme.colors.primary[200]; }, function (props) { return props.theme.colors.primary[100]; }, function (props) { return props.theme.colors.primary[200]; });
export var NavigationLink = function (_a) {
    var children = _a.children, href = _a.href, className = _a.className;
    return (React.createElement(StyledNavigationLink, { as: 'a', href: href, className: className }, children));
};
var templateObject_1;
//# sourceMappingURL=navigation-link.js.map