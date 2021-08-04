"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tab = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var tabs_context_1 = __importDefault(require("./tabs-context"));
var StyledTab = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    min-width: 120px;\n    display: block;\n    cursor: pointer;\n    outline: none;\n    text-align: center;\n    background-color: transparent;\n    border-bottom: ", " solid;\n    border-bottom-color: ", ";\n    padding: ", "\n        ", "\n        ", "\n        ", ";\n    color: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    border-radius: ", "\n        ", " 0 0;\n    transition: 0.2s ease;\n\n    &:hover {\n        border-bottom-color: ", ";\n    }\n\n    &:focus {\n        box-shadow: 0 0 0 2px ", ";\n    }\n\n    &.atlantum-tab-selected {\n        border-bottom-color: ", ";\n        color: ", ";\n    }\n"], ["\n    min-width: 120px;\n    display: block;\n    cursor: pointer;\n    outline: none;\n    text-align: center;\n    background-color: transparent;\n    border-bottom: ", " solid;\n    border-bottom-color: ", ";\n    padding: ", "\n        ", "\n        ", "\n        ", ";\n    color: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    border-radius: ", "\n        ", " 0 0;\n    transition: 0.2s ease;\n\n    &:hover {\n        border-bottom-color: ", ";\n    }\n\n    &:focus {\n        box-shadow: 0 0 0 2px ", ";\n    }\n\n    &.atlantum-tab-selected {\n        border-bottom-color: ", ";\n        color: ", ";\n    }\n"])), function (props) { return props.theme.spacing[2]; }, function (props) { return props.theme.colors.neutral[200]; }, function (props) { return props.theme.spacing[8]; }, function (props) { return props.theme.spacing[12]; }, function (props) { return props.theme.spacing[6]; }, function (props) { return props.theme.spacing[12]; }, function (props) { return props.theme.colors.neutral[300]; }, function (props) { return props.theme.typography.fontSize.base; }, function (props) { return props.theme.typography.fontWeight.base; }, function (props) { return props.theme.typography.lineHeight.base; }, function (props) { return props.theme.spacing[8]; }, function (props) { return props.theme.spacing[8]; }, function (props) { return props.theme.colors.neutral[300]; }, function (props) { return props.theme.colors.primary[100]; }, function (props) { return props.theme.colors.primary[200]; }, function (props) { return props.theme.colors.neutral[400]; });
var Tab = function (_a) {
    var children = _a.children, id = _a.id;
    var _b = react_1.useContext(tabs_context_1.default), active = _b.active, setActive = _b.setActive;
    var isSelected = active === id;
    return (react_1.default.createElement(StyledTab, { role: "tab", "aria-selected": isSelected, "aria-controls": "panel-" + id, id: "tab-" + id, tabIndex: isSelected ? 0 : -1, onClick: function () { return setActive && setActive(id); }, className: isSelected ? "atlantum-tab-selected" : undefined }, children));
};
exports.Tab = Tab;
var templateObject_1;
//# sourceMappingURL=tab.js.map