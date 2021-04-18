var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled from 'styled-components';
import { Fragment } from 'react';
var StyledHeading = styled(Fragment)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin: 0;\n    font-weight: ", ";\n    font-family: ", ";\n    color: ", ";\n\n    ", "\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n"], ["\n    margin: 0;\n    font-weight: ", ";\n    font-family: ", ";\n    color: ", ";\n\n    ",
    "\n\n    ",
    ";\n\n    ",
    ";\n\n    ",
    ";\n\n    ",
    ";\n\n    ",
    ";\n\n    ",
    ";\n"])), function (props) { return props.theme.typography.fontWeight.semiBold; }, function (props) { return props.theme.typography.family.heading; }, function (props) { return props.theme.colors.neutral400; }, function (props) {
    return props.centered &&
        "\n         text-align: center;\n    ";
}, function (props) {
    return props.as === 'h1' &&
        "\n        font-size: " + props.theme.typography.fontSize.h1 + ";\n        line-height: " + props.theme.typography.lineHeight.h1 + ";        \n    ";
}, function (props) {
    return props.as === 'h2' &&
        "\n        font-size: " + props.theme.typography.fontSize.h2 + ";\n        line-height: " + props.theme.typography.lineHeight.h2 + ";       \n    ";
}, function (props) {
    return props.as === 'h3' &&
        "\n        font-size: " + props.theme.typography.fontSize.h3 + ";\n        line-height: " + props.theme.typography.lineHeight.h3 + ";        \n    ";
}, function (props) {
    return props.as === 'h4' &&
        "\n        font-size: " + props.theme.typography.fontSize.h4 + ";\n        line-height: " + props.theme.typography.lineHeight.h4 + ";    \n    ";
}, function (props) {
    return props.as === 'h5' &&
        "\n        font-size: " + props.theme.typography.fontSize.h5 + ";\n        line-height: " + props.theme.typography.lineHeight.h5 + ";\n    ";
}, function (props) {
    return props.as === 'h6' &&
        "\n        font-size: " + props.theme.typography.fontSize.h6 + ";\n        line-height: " + props.theme.typography.lineHeight.h6 + ";\n\n    ";
});
export var Heading = function (_a) {
    var _b = _a.as, as = _b === void 0 ? 'h1' : _b, children = _a.children, centered = _a.centered, className = _a.className;
    return (React.createElement(StyledHeading, { as: as, centered: centered, className: className }, children));
};
var templateObject_1;
//# sourceMappingURL=heading.js.map