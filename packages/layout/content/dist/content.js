var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var StyledContent = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n\n    ", ";\n\n    ", "\n"], ["\n    width: 100%;\n\n    ",
    ";\n\n    ",
    "\n"])), function (props) {
    return props.width === 'full' &&
        "\n            max-width: 100%;\n        ";
}, function (props) {
    return props.width === 'focus' &&
        "\n            max-width: 1032px;\n            align-self: center;    \n        ";
});
export var Content = function (_a) {
    var children = _a.children, width = _a.width;
    return React.createElement(StyledContent, { width: width }, children);
};
var templateObject_1;
//# sourceMappingURL=content.js.map