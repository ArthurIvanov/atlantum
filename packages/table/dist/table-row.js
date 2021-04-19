var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var StyledTableRow = styled.tr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 12px;\n"], ["\n    padding: 12px;\n"])));
export var TableRow = function (_a) {
    var children = _a.children, id = _a.id, className = _a.className;
    return (React.createElement(StyledTableRow, { id: id, className: className }, children));
};
var templateObject_1;
//# sourceMappingURL=table-row.js.map