var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var StyledGrid = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: grid;\n    grid-template-columns: repeat(\n        ", ",\n        1fr\n    );\n    column-gap: ", "px;\n    row-gap: ", "px;\n\n    ", "\n\n    ", "\n\n    ", "\n"], ["\n    display: grid;\n    grid-template-columns: repeat(\n        ", ",\n        1fr\n    );\n    column-gap: ", "px;\n    row-gap: ", "px;\n\n    ",
    "\n\n    ",
    "\n\n    ",
    "\n"])), function (props) { return props.theme.layout.columns; }, function (props) { return props.columnGap; }, function (props) { return props.rowGap; }, function (props) {
    return props.align === 'start' &&
        "\n        align-items: start;\n    \n    ";
}, function (props) {
    return props.align === 'center' &&
        "\n        align-items: center;\n    \n    ";
}, function (props) {
    return props.align === 'end' &&
        "\n        align-items: end;\n    \n    ";
});
export var Grid = function (_a) {
    var children = _a.children, _b = _a.columnGap, columnGap = _b === void 0 ? '24' : _b, _c = _a.rowGap, rowGap = _c === void 0 ? '0' : _c, _d = _a.align, align = _d === void 0 ? 'start' : _d;
    return (React.createElement(StyledGrid, { className: "atlantum-grid", columnGap: columnGap, rowGap: rowGap, align: align }, children));
};
var templateObject_1;
//# sourceMappingURL=grid.js.map