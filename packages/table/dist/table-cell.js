var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var StyledTableCell = styled.td(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 12px;\n    border: 1px solid ", ";\n"], ["\n    padding: 12px;\n    border: 1px solid ", ";\n"])), function (props) { return props.theme.colors.neutral200; });
export var TableCell = function (_a) {
    var children = _a.children, id = _a.id, className = _a.className;
    return (React.createElement(StyledTableCell, { id: id, className: className }, children));
};
var templateObject_1;
//# sourceMappingURL=table-cell.js.map