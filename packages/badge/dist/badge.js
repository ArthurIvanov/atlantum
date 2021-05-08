var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import React from 'react';
export var StyledBadge = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-radius: ", ";\n    border: 1px solid transparent;\n    background-color: ", ";\n    color: ", ";\n    padding: ", "\n        ", ";\n    font-size: ", ";\n    font-family: ", ";\n    line-height: ", ";\n    font-weight: ", ";\n\n    ", "\n\n    ", "\n    \n    ", "\n    \n    ", "\n"], ["\n    border-radius: ", ";\n    border: 1px solid transparent;\n    background-color: ", ";\n    color: ", ";\n    padding: ", "\n        ", ";\n    font-size: ", ";\n    font-family: ", ";\n    line-height: ", ";\n    font-weight: ", ";\n\n    ",
    "\n\n    ",
    "\n    \n    ",
    "\n    \n    ",
    "\n"])), function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.colors.primary[200]; }, function (props) { return props.theme.colors.neutral[500]; }, function (props) { return props.theme.spacing[4]; }, function (props) { return props.theme.spacing[8]; }, function (props) { return props.theme.typography.fontSize.subLabel; }, function (props) { return props.theme.typography.family.base; }, function (props) { return props.theme.typography.lineHeight.subLabel; }, function (props) { return props.theme.typography.fontWeight.semiBold; }, function (props) {
    return props.isInfo &&
        "\n        border: none;\n    background-color: " + props.theme.colors.info[500] + ";\n    color: " + props.theme.colors.info[300] + ";\n    \n    ";
}, function (props) {
    return props.isSuccess &&
        "\n        border: none;\n    background-color: " + props.theme.colors.success[500] + ";\n    color: " + props.theme.colors.success[300] + ";\n    \n    ";
}, function (props) {
    return props.isWarning &&
        "\n        border: none;\n    background-color: " + props.theme.colors.warning[500] + ";\n    color: " + props.theme.colors.warning[300] + ";\n    \n    ";
}, function (props) {
    return props.isDanger &&
        "\n        border: none;\n    background-color: " + props.theme.colors.danger[500] + ";\n    color: " + props.theme.colors.danger[300] + ";\n    \n    ";
});
export var Badge = function (_a) {
    var children = _a.children, isInfo = _a.isInfo, isSuccess = _a.isSuccess, isWarning = _a.isWarning, isDanger = _a.isDanger;
    return (React.createElement(StyledBadge, { isInfo: isInfo, isSuccess: isSuccess, isWarning: isWarning, isDanger: isDanger }, children));
};
var templateObject_1;
//# sourceMappingURL=badge.js.map