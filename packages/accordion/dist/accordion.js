var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import React from 'react';
var StyledAccordion = styled.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-family: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    font-weight: ", ";\n    list-style: none;\n    color: ", ";\n    padding: ", " 0;\n    margin: 0;\n    width: 100%;\n"], ["\n    font-family: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    font-weight: ", ";\n    list-style: none;\n    color: ", ";\n    padding: ", " 0;\n    margin: 0;\n    width: 100%;\n"])), function (props) { return props.theme.typography.family.base; }, function (props) { return props.theme.typography.fontSize.base; }, function (props) { return props.theme.typography.lineHeight.base; }, function (props) { return props.theme.typography.fontWeight.base; }, function (props) { return props.theme.colors.neutral400; }, function (props) { return props.theme.spacing.space12; });
export var Accordion = function (_a) {
    var children = _a.children, className = _a.className;
    return React.createElement(StyledAccordion, { className: className }, children);
};
var templateObject_1;
//# sourceMappingURL=accordion.js.map