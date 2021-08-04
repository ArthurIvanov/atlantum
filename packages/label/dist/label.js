"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledLabel = styled_components_1.default.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n\n    span.input-label {\n        color: ", ";\n        margin-left: ", ";\n        font-weight: ", ";\n    }\n\n    span {\n        display: block;\n        font-size: ", ";\n        line-height: ", ";\n        font-family: ", ";\n\n        margin: 0;\n    }\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n"], ["\n    display: flex;\n    align-items: center;\n    width: 100%;\n\n    span.input-label {\n        color: ", ";\n        margin-left: ", ";\n        font-weight: ", ";\n    }\n\n    span {\n        display: block;\n        font-size: ", ";\n        line-height: ", ";\n        font-family: ", ";\n\n        margin: 0;\n    }\n\n    ",
    ";\n\n    ",
    ";\n\n    ",
    ";\n\n    ",
    ";\n\n    ",
    ";\n"])), function (props) { return props.theme.colors.neutral[400]; }, function (props) { return props.theme.spacing[8]; }, function (props) { return props.theme.typography.fontWeight.regular; }, function (props) { return props.theme.typography.fontSize.label; }, function (props) { return props.theme.typography.lineHeight.label; }, function (props) { return props.theme.typography.family.base; }, function (props) {
    return props.input &&
        "      \n            flex-direction: column;\n            align-items: flex-start;\n            span.input-alert {\n                color: " + props.theme.colors.neutral[400] + ";\n                font-size: " + props.theme.typography.fontSize.subLabel + ";\n                line-height: " + props.theme.typography.lineHeight.subLabel + ";\n                font-weight: " + props.theme.typography.fontWeight.regular + ";\n                margin-top: " + props.theme.spacing[4] + ";\n                }\n            span.input-label {\n                color: " + props.theme.colors.neutral[400] + ";\n                margin-bottom: " + props.theme.spacing[4] + ";\n                font-weight: " + props.theme.typography.fontWeight.semiBold + ";\n                margin-left: 0;\n            }\n \n            \n    ";
}, function (props) {
    return props.danger &&
        "      \n            span.input-alert {\n            color: " + props.theme.colors.danger[300] + ";\n            }\n               \n    ";
}, function (props) {
    return props.success &&
        "      \n            span.input-alert {\n            color: " + props.theme.colors.success[300] + ";\n            }\n               \n    ";
}, function (props) {
    return props.disabled &&
        "      \n            span.input-label {\n            color: " + props.theme.colors.neutral[200] + ";\n            }\n            \n    ";
}, function (props) {
    return props.fontWeight === 'regular' &&
        "      \n            span.input-label {\n            font-weight: " + props.theme.typography.fontWeight.regular + ";\n            color: red;\n            }\n       \n    ";
});
var Label = function (props, _a) {
    var fontWeight = _a.fontWeight;
    return (react_1.default.createElement(StyledLabel, { htmlFor: props.htmlFor, className: props.className, input: props.input, danger: props.danger, success: props.success, disabled: props.disabled, fontWeight: fontWeight }, props.children));
};
exports.Label = Label;
var templateObject_1;
//# sourceMappingURL=label.js.map