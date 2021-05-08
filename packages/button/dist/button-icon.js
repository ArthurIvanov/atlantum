var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import React from 'react';
import { StyledButton } from './button';
var StyledIconButton = styled(StyledButton)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    padding: ", ";\n"], ["\n    display: flex;\n    align-items: center;\n    padding: ", ";\n"])), function (props) { return props.theme.spacing[8]; });
export var ButtonIcon = function (_a) {
    var isSecondary = _a.isSecondary, disabled = _a.disabled, className = _a.className, children = _a.children;
    return (React.createElement(StyledIconButton, { isSecondary: isSecondary, disabled: disabled, className: className }, children));
};
var templateObject_1;
//# sourceMappingURL=button-icon.js.map