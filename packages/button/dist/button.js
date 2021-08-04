"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.StyledButton = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_1 = __importStar(require("react"));
exports.StyledButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    outline: none;\n    border: none;\n    display: inline-block;\n    border-radius: ", ";\n    background-color: ", ";\n    color: ", ";\n    padding: ", "\n        ", ";\n    font-size: ", ";\n    font-family: ", ";\n    line-height: ", ";\n    font-weight: ", ";\n    cursor: pointer;\n\n    transition: 0.2s ease;\n    &:hover {\n        background-color: ", ";\n    }\n    &:focus {\n        box-shadow: 0 0 0 2px ", ";\n    }\n\n    &:active {\n        background-color: ", ";\n    }\n\n    ", "\n\n    ", "\n\n    \n\n    ", "\n\n    ", "\n    \n    ", "\n\n\t", "\n\n\t", "\n\n\t", "\n"], ["\n    outline: none;\n    border: none;\n    display: inline-block;\n    border-radius: ", ";\n    background-color: ", ";\n    color: ", ";\n    padding: ", "\n        ", ";\n    font-size: ", ";\n    font-family: ", ";\n    line-height: ", ";\n    font-weight: ", ";\n    cursor: pointer;\n\n    transition: 0.2s ease;\n    &:hover {\n        background-color: ", ";\n    }\n    &:focus {\n        box-shadow: 0 0 0 2px ", ";\n    }\n\n    &:active {\n        background-color: ", ";\n    }\n\n    ",
    "\n\n    ",
    "\n\n    \n\n    ",
    "\n\n    ",
    "\n    \n    ",
    "\n\n\t",
    "\n\n\t",
    "\n\n\t",
    "\n"])), function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.colors.primary[200]; }, function (props) { return props.theme.colors.neutral[500]; }, function (props) { return props.theme.spacing[8]; }, function (props) { return props.theme.spacing[16]; }, function (props) { return props.theme.typography.fontSize.base; }, function (props) { return props.theme.typography.family.base; }, function (props) { return props.theme.typography.lineHeight.base; }, function (props) { return props.theme.typography.fontWeight.regular; }, function (props) { return props.theme.colors.primary[300]; }, function (props) { return props.theme.colors.primary[100]; }, function (props) { return props.theme.colors.primary[400]; }, function (props) {
    return props.leftIcon &&
        "   \n        display: inline-flex;\n        align-items: center;\n        & > * {\n            margin-right: " + props.theme.spacing[8] + "px;\n        }  \n    ";
}, function (props) {
    return props.rightIcon &&
        "  \n        display: inline-flex;\n        align-items: center; \n        & > * {\n            margin-left: " + props.theme.spacing[8] + "px;\n        }\n    ";
}, function (props) {
    return props.isSecondary &&
        "  \n         color: " + props.theme.colors.neutral[400] + ";\n         background-color: " + props.theme.colors.neutral[100] + ";\n         \n        &:hover {   \n            color: " + props.theme.colors.primary[300] + ";\n            background-color: " + props.theme.colors.neutral[100] + ";      \n        }\n         \n        \n        &:focus {\n            color: " + props.theme.colors.neutral[400] + ";\n            background-color: " + props.theme.colors.neutral[100] + ";\n        }\n    \n        &:active {\n            color: " + props.theme.colors.neutral[500] + ";\n            background-color: " + props.theme.colors.neutral[300] + ";\n        }\n    ";
}, function (props) {
    return props.disabled &&
        "\n         color: " + props.theme.colors.neutral[200] + ";\n         background-color: " + props.theme.colors.neutral[100] + ";\n         cursor: not-allowed;\n         &:hover {           \n         background-color: " + props.theme.colors.neutral[100] + ";\n\n    }\n    ";
}, function (props) {
    return props.themed === 'danger' &&
        "   \n        background-color: " + props.theme.colors.danger[200] + ";\n        &:hover {\n        background-color: " + props.theme.colors.danger[300] + ";\n    }\n        &:focus {\n            box-shadow: 0 0 0 2px " + props.theme.colors.danger[100] + ";\n        }\n    \n        &:active {\n            background-color: " + props.theme.colors.danger[400] + ";\n        }\n    \n    ";
}, function (props) {
    return props.themed === 'success' &&
        "   \n        background-color: " + props.theme.colors.success[200] + ";\n        &:hover {\n        background-color: " + props.theme.colors.success[300] + ";\n    }\n        &:focus {\n            box-shadow: 0 0 0 2px " + props.theme.colors.success[100] + ";\n        }\n    \n        &:active {\n            background-color: " + props.theme.colors.success[400] + ";\n        }\n    \n    ";
}, function (props) {
    return props.themed === 'warning' &&
        "   \n        background-color: " + props.theme.colors.warning[200] + ";\n        &:hover {\n        background-color: " + props.theme.colors.warning[300] + ";\n    }\n        &:focus {\n            box-shadow: 0 0 0 2px " + props.theme.colors.warning[100] + ";\n        }\n    \n        &:active {\n            background-color: " + props.theme.colors.warning[400] + ";\n        }\n    \n    ";
}, function (props) {
    return props.themed === 'info' &&
        "   \n        background-color: " + props.theme.colors.info[200] + ";\n        &:hover {\n        background-color: " + props.theme.colors.info[300] + ";\n    }\n        &:focus {\n            box-shadow: 0 0 0 2px " + props.theme.colors.info[100] + ";\n        }\n    \n        &:active {\n            background-color: " + props.theme.colors.info[400] + ";\n        }\n    \n    ";
});
var Button = function (props) { return (react_1.default.createElement(exports.StyledButton, { isSecondary: props.isSecondary, disabled: props.disabled, leftIcon: props.leftIcon, rightIcon: props.rightIcon, onClick: props.onClick, className: props.className, themed: props.themed },
    props.leftIcon && react_1.default.createElement(react_1.Fragment, null, props.leftIcon),
    props.children,
    props.rightIcon && react_1.default.createElement(react_1.Fragment, null, props.rightIcon))); };
exports.Button = Button;
var templateObject_1;
//# sourceMappingURL=button.js.map