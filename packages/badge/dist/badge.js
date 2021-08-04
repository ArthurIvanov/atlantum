"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = exports.StyledBadge = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_1 = __importDefault(require("react"));
exports.StyledBadge = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-radius: ", ";\n    border: 1px solid transparent;\n    background-color: ", ";\n    color: ", ";\n    padding: ", "\n        ", ";\n    font-size: ", ";\n    font-family: ", ";\n    line-height: ", ";\n    font-weight: ", ";\n\n    ", "\n\n    ", "\n    \n    ", "\n    \n    ", "\n"], ["\n    border-radius: ", ";\n    border: 1px solid transparent;\n    background-color: ", ";\n    color: ", ";\n    padding: ", "\n        ", ";\n    font-size: ", ";\n    font-family: ", ";\n    line-height: ", ";\n    font-weight: ", ";\n\n    ",
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
var Badge = function (_a) {
    var children = _a.children, isInfo = _a.isInfo, isSuccess = _a.isSuccess, isWarning = _a.isWarning, isDanger = _a.isDanger;
    return (react_1.default.createElement(exports.StyledBadge, { isInfo: isInfo, isSuccess: isSuccess, isWarning: isWarning, isDanger: isDanger }, children));
};
exports.Badge = Badge;
var templateObject_1;
//# sourceMappingURL=badge.js.map