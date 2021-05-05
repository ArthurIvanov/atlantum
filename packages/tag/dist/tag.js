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
    "\n"])), function (props) { return props.theme.spacing.space4; }, function (props) { return props.theme.spacing.space8; }, function (props) { return props.theme.typography.fontSize.subLabel; }, function (props) { return props.theme.typography.fontWeight.semiBold; }, function (props) { return props.theme.typography.lineHeight.subLabel; }, function (props) {
    return props.tagColor === 'neutral' &&
        "\n        color: " + props.theme.colors.neutral400 + ";\n        background-color: " + props.theme.colors.neutralGlobalBG + ";\n    ";
}, function (props) {
    return props.tagColor === 'red' &&
        "\n        color: " + props.theme.colors.danger300 + ";\n        background-color: " + props.theme.colors.dangerBG + ";\n    ";
}, function (props) {
    return props.tagColor === 'blue' &&
        "\n        color: " + props.theme.colors.info300 + ";\n        background-color: " + props.theme.colors.infoBG + ";\n    ";
}, function (props) {
    return props.tagColor === 'green' &&
        "\n        color: " + props.theme.colors.success300 + ";\n        background-color: " + props.theme.colors.successBG + ";\n    ";
}, function (props) {
    return props.tagColor === 'orange' &&
        "\n        color: " + props.theme.colors.warning300 + ";\n        background-color: " + props.theme.colors.warningBG + ";\n    ";
});
export var Tag = function (_a) {
    var children = _a.children, tagColor = _a.tagColor;
    return (React.createElement(StyledTag, { tagColor: tagColor },
        React.createElement("span", null, children)));
};
var templateObject_1;
//# sourceMappingURL=tag.js.map