"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accordion = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_1 = __importDefault(require("react"));
var StyledAccordion = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-family: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    font-weight: ", ";\n    list-style: none;\n    color: ", ";\n    padding: ", " 0;\n    margin: 0;\n    width: 100%;\n"], ["\n    font-family: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    font-weight: ", ";\n    list-style: none;\n    color: ", ";\n    padding: ", " 0;\n    margin: 0;\n    width: 100%;\n"])), function (props) { return props.theme.typography.family.base; }, function (props) { return props.theme.typography.fontSize.base; }, function (props) { return props.theme.typography.lineHeight.base; }, function (props) { return props.theme.typography.fontWeight.base; }, function (props) { return props.theme.colors.neutral[400]; }, function (props) { return props.theme.spacing[12]; });
var Accordion = function (_a) {
    var children = _a.children, className = _a.className;
    return react_1.default.createElement(StyledAccordion, { className: className }, children);
};
exports.Accordion = Accordion;
var templateObject_1;
//# sourceMappingURL=accordion.js.map