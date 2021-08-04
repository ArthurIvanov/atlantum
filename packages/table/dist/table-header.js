"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableHeader = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledTableHeader = styled_components_1.default.th(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: ", "px;\n    text-align: left;\n    border: 1px solid ", ";\n"], ["\n    padding: ", "px;\n    text-align: left;\n    border: 1px solid ", ";\n"])), function (props) { return props.theme.spacing[12]; }, function (props) { return props.theme.colors.neutral[200]; });
var TableHeader = function (_a) {
    var children = _a.children, id = _a.id, className = _a.className;
    return (react_1.default.createElement(StyledTableHeader, { id: id, className: className }, children));
};
exports.TableHeader = TableHeader;
var templateObject_1;
//# sourceMappingURL=table-header.js.map