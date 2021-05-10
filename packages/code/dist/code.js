var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import React from 'react';
var StyledCode = styled.code(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    & > pre {\n        margin: 0;\n        padding: 0;\n        display: block;\n    }\n    border-radius: ", ";\n    width: 100%;\n    padding: ", "\n        ", ";\n    font-size: ", ";\n    line-height: ", ";\n    font-family: ", ";\n    color: ", ";\n    background-color: ", "; ;\n"], ["\n    & > pre {\n        margin: 0;\n        padding: 0;\n        display: block;\n    }\n    border-radius: ", ";\n    width: 100%;\n    padding: ", "\n        ", ";\n    font-size: ", ";\n    line-height: ", ";\n    font-family: ", ";\n    color: ", ";\n    background-color: ", "; ;\n"])), function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.spacing[10]; }, function (props) { return props.theme.spacing[12]; }, function (props) { return props.theme.typography.fontSize.label; }, function (props) { return props.theme.typography.lineHeight.label; }, function (props) { return props.theme.typography.family.monospace; }, function (props) { return props.theme.colors.neutral[400]; }, function (props) { return props.theme.colors.neutral[600]; });
export var Code = function (_a) {
    var children = _a.children, className = _a.className;
    return (React.createElement(StyledCode, { className: className },
        React.createElement("pre", null, children)));
};
var templateObject_1;
//# sourceMappingURL=code.js.map