var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var StyledTable = styled.table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-collapse: collapse;\n    color: ", ";\n    font-size: ", ";\n    font-family: ", ";\n    line-height: ", ";\n\n    tr:nth-child(odd) {\n        background-color: ", ";\n    }\n"], ["\n    border-collapse: collapse;\n    color: ", ";\n    font-size: ", ";\n    font-family: ", ";\n    line-height: ", ";\n\n    tr:nth-child(odd) {\n        background-color: ", ";\n    }\n"])), function (props) { return props.theme.colors.neutral400; }, function (props) { return props.theme.typography.fontSize.label; }, function (props) { return props.theme.typography.family.label; }, function (props) { return props.theme.typography.lineHeight.label; }, function (props) { return props.theme.colors.neutral100; });
export var Table = function (_a) {
    var children = _a.children, className = _a.className;
    return React.createElement(StyledTable, { className: className }, children);
};
var templateObject_1;
//# sourceMappingURL=table.js.map