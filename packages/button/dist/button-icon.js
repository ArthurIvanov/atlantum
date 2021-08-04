"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonIcon = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_1 = __importDefault(require("react"));
var button_1 = require("./button");
var StyledIconButton = styled_components_1.default(button_1.StyledButton)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    padding: ", ";\n"], ["\n    display: flex;\n    align-items: center;\n    padding: ", ";\n"])), function (props) { return props.theme.spacing[8]; });
var ButtonIcon = function (_a) {
    var isSecondary = _a.isSecondary, disabled = _a.disabled, className = _a.className, children = _a.children;
    return (react_1.default.createElement(StyledIconButton, { isSecondary: isSecondary, disabled: disabled, className: className }, children));
};
exports.ButtonIcon = ButtonIcon;
var templateObject_1;
//# sourceMappingURL=button-icon.js.map