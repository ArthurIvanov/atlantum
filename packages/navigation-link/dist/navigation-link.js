"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationLink = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_1 = __importDefault(require("react"));
var StyledNavigationLink = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    padding: ", "\n        ", ";\n    text-decoration: none;\n    cursor: pointer;\n    border-radius: ", ";\n    color: ", ";\n    transition: 0.2s ease;\n    &:hover {\n        color: ", ";\n    }\n    &:focus {\n        box-shadow: 0 0 0 2px ", ";\n        color: ", ";\n    }\n"], ["\n    display: flex;\n    padding: ", "\n        ", ";\n    text-decoration: none;\n    cursor: pointer;\n    border-radius: ", ";\n    color: ", ";\n    transition: 0.2s ease;\n    &:hover {\n        color: ", ";\n    }\n    &:focus {\n        box-shadow: 0 0 0 2px ", ";\n        color: ", ";\n    }\n"])), function (props) { return props.theme.spacing[8]; }, function (props) { return props.theme.spacing[24]; }, function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.colors.neutral[400]; }, function (props) { return props.theme.colors.primary[200]; }, function (props) { return props.theme.colors.primary[100]; }, function (props) { return props.theme.colors.primary[200]; });
var NavigationLink = function (_a) {
    var children = _a.children, href = _a.href, className = _a.className;
    return (react_1.default.createElement(StyledNavigationLink, { as: 'a', href: href, className: className }, children));
};
exports.NavigationLink = NavigationLink;
var templateObject_1;
//# sourceMappingURL=navigation-link.js.map