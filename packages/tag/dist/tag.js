"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledTag = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: ", "\n        ", ";\n    border-radius: 32px;\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n\n    ", "\n\n    ", "\n\n\t", "\n\n\t", "\n\n\t", "\n"], ["\n    padding: ", "\n        ", ";\n    border-radius: 32px;\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n\n    ",
    "\n\n    ",
    "\n\n\t",
    "\n\n\t",
    "\n\n\t",
    "\n"])), function (props) { return props.theme.spacing[4]; }, function (props) { return props.theme.spacing[8]; }, function (props) { return props.theme.typography.fontSize.subLabel; }, function (props) { return props.theme.typography.fontWeight.semiBold; }, function (props) { return props.theme.typography.lineHeight.subLabel; }, function (props) {
    return props.tagColor === 'neutral' &&
        "\n        color: " + props.theme.colors.neutral[400] + ";\n        background-color: " + props.theme.colors.neutral[600] + ";\n    ";
}, function (props) {
    return props.tagColor === 'red' &&
        "\n        color: " + props.theme.colors.danger[400] + ";\n        background-color: " + props.theme.colors.danger[500] + ";\n    ";
}, function (props) {
    return props.tagColor === 'blue' &&
        "\n        color: " + props.theme.colors.info[400] + ";\n        background-color: " + props.theme.colors.info[500] + ";\n    ";
}, function (props) {
    return props.tagColor === 'green' &&
        "\n        color: " + props.theme.colors.success[400] + ";\n        background-color: " + props.theme.colors.success[500] + ";\n    ";
}, function (props) {
    return props.tagColor === 'orange' &&
        "\n        color: " + props.theme.colors.warning[400] + ";\n        background-color: " + props.theme.colors.warning[500] + ";\n    ";
});
var Tag = function (_a) {
    var children = _a.children, tagColor = _a.tagColor;
    return (react_1.default.createElement(StyledTag, { tagColor: tagColor },
        react_1.default.createElement("span", null, children)));
};
exports.Tag = Tag;
var templateObject_1;
//# sourceMappingURL=tag.js.map