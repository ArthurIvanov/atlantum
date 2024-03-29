"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_1 = __importDefault(require("react"));
var icons_1 = require("@atlantum/icons");
var StyledAvatar = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-radius: 50%;\n    border: 1px solid ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-transform: uppercase;\n    color: ", ";\n    background: ", ";\n    font-weight: ", ";\n\n    ", "\n\n    ", "\n\n    ", "\n"], ["\n    border-radius: 50%;\n    border: 1px solid ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-transform: uppercase;\n    color: ", ";\n    background: ", ";\n    font-weight: ", ";\n\n    ",
    "\n\n    ",
    "\n\n    ",
    "\n"])), function (props) { return props.theme.colors.primary[200]; }, function (props) { return props.theme.colors.neutral[600]; }, function (props) { return props.theme.colors.primary[200]; }, function (props) { return props.theme.typography.fontWeight.semiBold; }, function (props) {
    return props.size === 'default' &&
        "\n        width: " + props.theme.spacing[32] + ";\n        height: " + props.theme.spacing[32] + ";\n        font-size: " + props.theme.typography.fontSize.base + ";\n        line-height: " + props.theme.typography.lineHeight.base + ";\n    ";
}, function (props) {
    return props.size === 'large' &&
        "\n        width: " + props.theme.spacing[48] + ";\n        height: " + props.theme.spacing[48] + ";\n        font-size: " + props.theme.typography.fontSize.h5 + ";\n        line-height: " + props.theme.typography.lineHeight.h5 + ";\n        .atlantum-avatar-icon {\n        width: " + props.theme.spacing[32] + ";\n        height: " + props.theme.spacing[32] + ";\n        }\n    ";
}, function (props) {
    return props.src &&
        "\n        background-color: none;\n        background-image: url(" + props.src + ");\n        background-position: center; \n        background-repeat: no-repeat; \n        background-size: cover;\n    \n    ";
});
var Avatar = function (_a) {
    var children = _a.children, src = _a.src, _b = _a.size, size = _b === void 0 ? 'default' : _b;
    return (react_1.default.createElement(StyledAvatar, { src: src, size: size }, src ? null : children ? (children) : (react_1.default.createElement(icons_1.Icon, { className: "atlantum-avatar-icon", name: "user" }))));
};
exports.Avatar = Avatar;
var templateObject_1;
//# sourceMappingURL=avatar.js.map