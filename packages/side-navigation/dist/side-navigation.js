var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var StyledSideNavigation = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-radius: ", ";\n    color: ", ";\n    display: flex;\n    flex-direction: row;\n    position: fixed;\n    left: ", ";\n    bottom: ", ";\n    transform: translateX(0px);\n    padding: ", ";\n    top: 120px;\n    width: 256px;\n\n    background-color: ", ";\n    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);\n    display: none;\n\n    @media only screen and (max-width: 1050px) {\n        display: block;\n    }\n"], ["\n    border-radius: ", ";\n    color: ", ";\n    display: flex;\n    flex-direction: row;\n    position: fixed;\n    left: ", ";\n    bottom: ", ";\n    transform: translateX(0px);\n    padding: ", ";\n    top: 120px;\n    width: 256px;\n\n    background-color: ", ";\n    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);\n    display: none;\n\n    @media only screen and (max-width: 1050px) {\n        display: block;\n    }\n"])), function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.colors.text; }, function (props) { return props.theme.spacing.space24; }, function (props) { return props.theme.spacing.space24; }, function (props) { return props.theme.spacing.space24; }, function (props) { return props.theme.colors.neutralLighter; });
export var SideNavigation = function (props) {
    return (React.createElement(StyledSideNavigation, { id: "atlantum-sidebar" }, props.children));
};
var templateObject_1;
//# sourceMappingURL=side-navigation.js.map