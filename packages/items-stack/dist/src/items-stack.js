var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import React from 'react';
var StyledItemsStack = styled.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n\n    ", "\n\n    ", "\n"], ["\n    display: flex;\n\n    ",
    "\n\n    ",
    "\n"])), function (props) {
    return props.direction === 'column' &&
        "    \n        flex-direction: column;\n        & > *:not(:last-child) {\n            margin-bottom: " + props.distance + ";\n        }              \n    ";
}, function (props) {
    return props.direction === 'row' &&
        "\n        align-items: center;\n        flex-direction: row;\n        & > *:not(:last-child) {\n            margin-right: " + props.distance + ";\n        }\n    ";
});
export var ItemsStack = function (_a) {
    var children = _a.children, _b = _a.direction, direction = _b === void 0 ? 'row' : _b, _c = _a.distance, distance = _c === void 0 ? '24px' : _c, className = _a.className;
    return (React.createElement(StyledItemsStack, { direction: direction, distance: distance, className: className }, children));
};
var templateObject_1;
//# sourceMappingURL=items-stack.js.map