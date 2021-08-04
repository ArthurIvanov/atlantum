"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextLink = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledTextLink = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    cursor: pointer;\n    display: flex;\n    color: ", ";\n    text-decoration: none;\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    &:hover {\n        color: ", ";\n        .atlantum-textlink-icon {\n            &:hover {\n                color: ", ";\n            }\n        }\n    }\n\n    .atlantum-textlink {\n        margin-left: ", ";\n    }\n\n    .atlantum-textlink-icon {\n        margin-left: ", ";\n    }\n"], ["\n    cursor: pointer;\n    display: flex;\n    color: ", ";\n    text-decoration: none;\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    &:hover {\n        color: ", ";\n        .atlantum-textlink-icon {\n            &:hover {\n                color: ", ";\n            }\n        }\n    }\n\n    .atlantum-textlink {\n        margin-left: ", ";\n    }\n\n    .atlantum-textlink-icon {\n        margin-left: ", ";\n    }\n"])), function (props) { return props.theme.colors.primary[200]; }, function (props) { return props.theme.typography.fontSize.base; }, function (props) { return props.theme.typography.fontWeight.base; }, function (props) { return props.theme.typography.lineHeight.base; }, function (props) { return props.theme.colors.primary[300]; }, function (props) { return props.theme.colors.primary[300]; }, function (props) { return props.theme.spacing[24]; }, function (props) { return props.theme.spacing[8]; });
var TextLink = function (_a) {
    var children = _a.children, onClick = _a.onClick, Icon = _a.Icon, href = _a.href, className = _a.className;
    return (react_1.default.createElement(StyledTextLink, { as: "a", href: href, onClick: onClick, className: className + " \"atlantum-textlink\"" },
        children,
        Icon && react_1.default.createElement("span", { className: "atlantum-textlink-icon" }, Icon)));
};
exports.TextLink = TextLink;
var templateObject_1;
//# sourceMappingURL=text-link.js.map