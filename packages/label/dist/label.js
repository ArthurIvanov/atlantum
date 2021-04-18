var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var StyledLabel = styled.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n\n    span.input-label {\n        color: ", ";\n        margin-left: ", ";\n        font-weight: ", ";\n    }\n\n    span {\n        display: block;\n        font-size: ", ";\n        line-height: ", ";\n        font-family: ", ";\n\n        margin: 0;\n    }\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n"], ["\n    display: flex;\n    align-items: center;\n    width: 100%;\n\n    span.input-label {\n        color: ", ";\n        margin-left: ", ";\n        font-weight: ", ";\n    }\n\n    span {\n        display: block;\n        font-size: ", ";\n        line-height: ", ";\n        font-family: ", ";\n\n        margin: 0;\n    }\n\n    ",
    ";\n\n    ",
    ";\n\n    ",
    ";\n\n    ",
    ";\n\n    ",
    ";\n"])), function (props) { return props.theme.colors.neutral400; }, function (props) { return props.theme.spacing.space8; }, function (props) { return props.theme.typography.fontWeight.regular; }, function (props) { return props.theme.typography.fontSize.label; }, function (props) { return props.theme.typography.lineHeight.label; }, function (props) { return props.theme.typography.family.base; }, function (props) {
    return props.input &&
        "      \n            flex-direction: column;\n            align-items: flex-start;\n            span.input-alert {\n                color: " + props.theme.colors.neutral400 + ";\n                font-size: " + props.theme.typography.fontSize.subLabel + ";\n                line-height: " + props.theme.typography.lineHeight.subLabel + ";\n                font-weight: " + props.theme.typography.fontWeight.regular + ";\n                margin-top: " + props.theme.spacing.space4 + ";\n                }\n            span.input-label {\n                color: " + props.theme.colors.neutral400 + ";\n                margin-bottom: " + props.theme.spacing.space4 + ";\n                font-weight: " + props.theme.typography.fontWeight.semiBold + ";\n                margin-left: 0;\n            }\n \n            \n    ";
}, function (props) {
    return props.danger &&
        "      \n            span.input-alert {\n            color: " + props.theme.colors.danger300 + ";\n            }\n               \n    ";
}, function (props) {
    return props.success &&
        "      \n            span.input-alert {\n            color: " + props.theme.colors.success300 + ";\n            }\n               \n    ";
}, function (props) {
    return props.disabled &&
        "      \n            span.input-label {\n            color: " + props.theme.colors.neutral200 + ";\n            }\n            \n    ";
}, function (props) {
    return props.fontWeight === 'regular' &&
        "      \n            span.input-label {\n            font-weight: " + props.theme.typography.fontWeight.regular + ";\n            color: red;\n            }\n       \n    ";
});
export var Label = function (props, _a) {
    var fontWeight = _a.fontWeight;
    return (React.createElement(StyledLabel, { htmlFor: props.htmlFor, className: props.className, input: props.input, danger: props.danger, success: props.success, disabled: props.disabled, fontWeight: fontWeight }, props.children));
};
var templateObject_1;
//# sourceMappingURL=label.js.map