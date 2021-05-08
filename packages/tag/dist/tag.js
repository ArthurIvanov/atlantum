var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var StyledTag = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: ", "\n        ", ";\n    border-radius: 32px;\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n\n    ", "\n\n    ", "\n\n\t", "\n\n\t", "\n\n\t", "\n"], ["\n    padding: ", "\n        ", ";\n    border-radius: 32px;\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n\n    ",
    "\n\n    ",
    "\n\n\t",
    "\n\n\t",
    "\n\n\t",
    "\n"])), function (props) { return props.theme.spacing[4]; }, function (props) { return props.theme.spacing[8]; }, function (props) { return props.theme.typography.fontSize.subLabel; }, function (props) { return props.theme.typography.fontWeight.semiBold; }, function (props) { return props.theme.typography.lineHeight.subLabel; }, function (props) {
    return props.tagColor === 'neutral' &&
        "\n        color: " + props.theme.colors.neutral[400] + ";\n        background-color: " + props.theme.colors.neutral[600] + ";\n    ";
}, function (props) {
    return props.tagColor === 'red' &&
        "\n        color: " + props.theme.colors.danger[300] + ";\n        background-color: " + props.theme.colors.danger[400] + ";\n    ";
}, function (props) {
    return props.tagColor === 'blue' &&
        "\n        color: " + props.theme.colors.info300 + ";\n        background-color: " + props.theme.colors.info[400] + ";\n    ";
}, function (props) {
    return props.tagColor === 'green' &&
        "\n        color: " + props.theme.colors.success[300] + ";\n        background-color: " + props.theme.colors.success[400] + ";\n    ";
}, function (props) {
    return props.tagColor === 'orange' &&
        "\n        color: " + props.theme.colors.warning[300] + ";\n        background-color: " + props.theme.colors.warning[400] + ";\n    ";
});
export var Tag = function (_a) {
    var children = _a.children, tagColor = _a.tagColor;
    return (React.createElement(StyledTag, { tagColor: tagColor },
        React.createElement("span", null, children)));
};
var templateObject_1;
//# sourceMappingURL=tag.js.map