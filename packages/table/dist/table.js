"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledTable = styled_components_1.default.table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-collapse: collapse;\n    color: ", ";\n    font-size: ", ";\n    font-family: ", ";\n    line-height: ", ";\n\n    tr:nth-child(odd) {\n        background-color: ", ";\n    }\n"], ["\n    border-collapse: collapse;\n    color: ", ";\n    font-size: ", ";\n    font-family: ", ";\n    line-height: ", ";\n\n    tr:nth-child(odd) {\n        background-color: ", ";\n    }\n"])), function (props) { return props.theme.colors.neutral[400]; }, function (props) { return props.theme.typography.fontSize.label; }, function (props) { return props.theme.typography.family.label; }, function (props) { return props.theme.typography.lineHeight.label; }, function (props) { return props.theme.colors.neutral[100]; });
var Table = function (_a) {
    var children = _a.children, className = _a.className;
    return react_1.default.createElement(StyledTable, { className: className }, children);
};
exports.Table = Table;
var templateObject_1;
//# sourceMappingURL=table.js.map