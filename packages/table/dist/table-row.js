"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRow = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledTableRow = styled_components_1.default.tr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: ", ";\n"], ["\n    padding: ", ";\n"])), function (props) { return props.theme.spacing[12]; });
var TableRow = function (_a) {
    var children = _a.children, id = _a.id, className = _a.className;
    return (react_1.default.createElement(StyledTableRow, { id: id, className: className }, children));
};
exports.TableRow = TableRow;
var templateObject_1;
//# sourceMappingURL=table-row.js.map