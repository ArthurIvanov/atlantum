var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var StyledTextLink = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    cursor: pointer;\n    display: flex;\n    color: ", ";\n    text-decoration: none;\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    &:hover {\n        color: ", ";\n        .atlantum-textlink-icon {\n            &:hover {\n                color: ", ";\n            }\n        }\n    }\n\n    .atlantum-textlink {\n        margin-left: ", ";\n    }\n\n    .atlantum-textlink-icon {\n        margin-left: ", ";\n    }\n"], ["\n    cursor: pointer;\n    display: flex;\n    color: ", ";\n    text-decoration: none;\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    &:hover {\n        color: ", ";\n        .atlantum-textlink-icon {\n            &:hover {\n                color: ", ";\n            }\n        }\n    }\n\n    .atlantum-textlink {\n        margin-left: ", ";\n    }\n\n    .atlantum-textlink-icon {\n        margin-left: ", ";\n    }\n"])), function (props) { return props.theme.colors.primary[200]; }, function (props) { return props.theme.typography.fontSize.base; }, function (props) { return props.theme.typography.fontWeight.base; }, function (props) { return props.theme.typography.lineHeight.base; }, function (props) { return props.theme.colors.primary[300]; }, function (props) { return props.theme.colors.primary[300]; }, function (props) { return props.theme.spacing[24]; }, function (props) { return props.theme.spacing[8]; });
export var TextLink = function (_a) {
    var children = _a.children, onClick = _a.onClick, Icon = _a.Icon, href = _a.href, className = _a.className;
    return (React.createElement(StyledTextLink, { as: "a", href: href, onClick: onClick, className: className + " \"atlantum-textlink\"" },
        children,
        Icon && React.createElement("span", { className: "atlantum-textlink-icon" }, Icon)));
};
var templateObject_1;
//# sourceMappingURL=text-link.js.map