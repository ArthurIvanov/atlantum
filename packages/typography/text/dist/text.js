var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import { Fragment } from 'react';
import styled from 'styled-components';
var StyledText = styled(Fragment)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    color: ", ";\n    margin: 0;\n\n    ", "\n\n    ", "\n\n    ", "\n"], ["\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    color: ", ";\n    margin: 0;\n\n    ",
    "\n\n    ",
    "\n\n    ",
    "\n"])), function (props) { return props.theme.typography.fontSize.base; }, function (props) { return props.theme.typography.fontWeight.base; }, function (props) { return props.theme.typography.lineHeight.base; }, function (props) { return props.theme.colors.neutral[400]; }, function (props) {
    return props.centered &&
        "\n        text-align: center;\n    ";
}, function (props) {
    return props.size === 'label' &&
        "\n        font-size: " + props.theme.typography.fontSize.label + ";\n        line-height: " + props.theme.typography.lineHeight.label + ";\n    ";
}, function (props) {
    return props.size === 'subLabel' &&
        "\n        font-size: " + props.theme.typography.fontSize.subLabel + ";\n         line-height: " + props.theme.typography.lineHeight.subLabel + ";\n    ";
});
export var Text = function (_a) {
    var as = _a.as, children = _a.children, size = _a.size, centered = _a.centered, className = _a.className;
    return (React.createElement(StyledText, { as: as, size: size, centered: centered, className: className }, children));
};
var templateObject_1;
//# sourceMappingURL=text.js.map