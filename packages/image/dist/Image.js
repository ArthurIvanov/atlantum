var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import React from 'react';
var StyledImage = styled.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: ", ";\n    height: ", ";\n    ", "\n"], ["\n    width: ", ";\n    height: ", ";\n    ",
    "\n"])), function (props) { return props.width; }, function (props) { return props.height; }, function (props) {
    return props.isRounded &&
        "\n        border-radius: " + props.theme.borderRadius + ";\n    ";
});
export var Image = function (_a) {
    var _b = _a.src, src = _b === void 0 ? 'https://i.ibb.co/DLtL9b8/atlantum-bg.png' : _b, alt = _a.alt, _c = _a.width, width = _c === void 0 ? '100%' : _c, _d = _a.height, height = _d === void 0 ? '100%' : _d, _e = _a.isRounded, isRounded = _e === void 0 ? true : _e, className = _a.className;
    return (React.createElement(StyledImage, { alt: alt, src: src, width: width, height: height, isRounded: isRounded, className: className }));
};
var templateObject_1;
//# sourceMappingURL=Image.js.map