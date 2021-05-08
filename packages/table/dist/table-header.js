var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var StyledTableHeader = styled.th(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: ", "px;\n    text-align: left;\n    border: 1px solid ", ";\n"], ["\n    padding: ", "px;\n    text-align: left;\n    border: 1px solid ", ";\n"])), function (props) { return props.theme.spacing[12]; }, function (props) { return props.theme.colors.neutral[200]; });
export var TableHeader = function (_a) {
    var children = _a.children, id = _a.id, className = _a.className;
    return (React.createElement(StyledTableHeader, { id: id, className: className }, children));
};
var templateObject_1;
//# sourceMappingURL=table-header.js.map