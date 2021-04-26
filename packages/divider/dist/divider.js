var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var StyledDivider = styled.hr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: block;\n    padding: 0;\n    margin: 0;\n    border: none;\n\n    height: 1px;\n    background-color: ", ";\n\n    ", "\n\n    ", "\n"], ["\n    display: block;\n    padding: 0;\n    margin: 0;\n    border: none;\n\n    height: 1px;\n    background-color: ", ";\n\n    ",
    "\n\n    ",
    "\n"])), function (props) { return props.theme.colors.neutral300; }, function (props) {
    return props.orientation === 'horizontal' &&
        "\n        width: " + props.length + ";\n        height: 1px;\n    ";
}, function (props) {
    return props.orientation === 'vertical' &&
        "\n        height: " + props.length + ";\n        width: 1px;\n    ";
});
export var Divider = function (_a) {
    var orientation = _a.orientation, length = _a.length;
    return (React.createElement(StyledDivider, { orientation: orientation, length: length }));
};
var templateObject_1;
//# sourceMappingURL=divider.js.map