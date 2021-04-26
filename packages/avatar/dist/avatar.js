var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import React from 'react';
import { Icon } from '@atlantum/icons';
var StyledAvatar = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-radius: 50%;\n    border: 1px solid ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-transform: uppercase;\n    color: ", ";\n    background: ", ";\n    font-weight: ", ";\n\n    ", "\n\n    ", "\n\n    ", "\n"], ["\n    border-radius: 50%;\n    border: 1px solid ", ";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-transform: uppercase;\n    color: ", ";\n    background: ", ";\n    font-weight: ", ";\n\n    ",
    "\n\n    ",
    "\n\n    ",
    "\n"])), function (props) { return props.theme.colors.primary200; }, function (props) { return props.theme.colors.neutralGlobalBG; }, function (props) { return props.theme.colors.primary200; }, function (props) { return props.theme.typography.fontWeight.semiBold; }, function (props) {
    return props.size === 'default' &&
        "\n        width: " + props.theme.spacing.space32 + ";\n        height: " + props.theme.spacing.space32 + ";\n        font-size: " + props.theme.typography.fontSize.base + ";\n        line-height: " + props.theme.typography.lineHeight.base + ";\n    ";
}, function (props) {
    return props.size === 'large' &&
        "\n        width: " + props.theme.spacing.space48 + ";\n        height: " + props.theme.spacing.space48 + ";\n        font-size: " + props.theme.typography.fontSize.h5 + ";\n        line-height: " + props.theme.typography.lineHeight.h5 + ";\n        .atlantum-avatar-icon {\n        width: " + props.theme.spacing.space32 + ";\n        height: " + props.theme.spacing.space32 + ";\n        }\n    ";
}, function (props) {
    return props.src &&
        "\n        background-color: none;\n        background-image: url(" + props.src + ");\n        background-position: center; \n        background-repeat: no-repeat; \n        background-size: cover;\n    \n    ";
});
export var Avatar = function (_a) {
    var children = _a.children, src = _a.src, _b = _a.size, size = _b === void 0 ? 'default' : _b;
    return (React.createElement(StyledAvatar, { src: src, size: size }, src ? null : children ? (children) : (React.createElement(Icon, { className: "atlantum-avatar-icon", name: "user" }))));
};
var templateObject_1;
//# sourceMappingURL=avatar.js.map