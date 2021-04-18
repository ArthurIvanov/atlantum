var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var StyledProductBanner = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border: none;\n    border-radius: ", ";\n    margin-bottom: ", ";\n    background-size: auto;\n    background: url(", ") no-repeat center;\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    justify-content: center;\n    padding: ", ";\n    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);\n\n    ", "\n\n    ", "\n    \n    ", "\n    \n    h1,h2,h3,h4,h5,h6 {\n        margin-bottom: ", ";\n        color: ", ";\n    }\n"], ["\n    border: none;\n    border-radius: ", ";\n    margin-bottom: ", ";\n    background-size: auto;\n    background: url(", ") no-repeat center;\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    justify-content: center;\n    padding: ", ";\n    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);\n\n    ",
    "\n\n    ",
    "\n    \n    ",
    "\n    \n    h1,h2,h3,h4,h5,h6 {\n        margin-bottom: ", ";\n        color: ", ";\n    }\n"])), function (props) { return props.theme.spacing.space8; }, function (props) { return props.theme.spacing.space24; }, function (props) { return props.backgroundImage; }, function (props) { return props.theme.spacing.space24; }, function (props) {
    return props.size === 'regular' &&
        "\n        height: 256px;\n    ";
}, function (props) {
    return props.size === 'large' &&
        "\n        height: 320px;\n    ";
}, function (props) {
    return props.size === 'hero' &&
        "\n        height: 540px;\n    ";
}, function (props) { return props.theme.spacing.space24; }, function (props) { return props.theme.colors.textInverted; });
export var ProductBanner = function (_a) {
    var children = _a.children, backgroundImage = _a.backgroundImage, _b = _a.size, size = _b === void 0 ? 'regular' : _b, className = _a.className;
    return (React.createElement(StyledProductBanner, { backgroundImage: backgroundImage, size: size, className: className },
        React.createElement("div", { className: "atlantum-product-banner-content" }, children)));
};
var templateObject_1;
//# sourceMappingURL=product-banner.js.map