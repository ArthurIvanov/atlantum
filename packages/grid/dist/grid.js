"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledGrid = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: grid;\n    grid-template-columns: repeat(\n        ", ",\n        1fr\n    );\n    column-gap: ", "px;\n    row-gap: ", "px;\n\n    ", "\n\n    ", "\n\n    ", "\n"], ["\n    display: grid;\n    grid-template-columns: repeat(\n        ", ",\n        1fr\n    );\n    column-gap: ", "px;\n    row-gap: ", "px;\n\n    ",
    "\n\n    ",
    "\n\n    ",
    "\n"])), function (props) { return props.theme.layout.columns; }, function (props) { return props.columnGap; }, function (props) { return props.rowGap; }, function (props) {
    return props.align === 'start' &&
        "\n        align-items: start;\n    \n    ";
}, function (props) {
    return props.align === 'center' &&
        "\n        align-items: center;\n    \n    ";
}, function (props) {
    return props.align === 'end' &&
        "\n        align-items: end;\n    \n    ";
});
var Grid = function (_a) {
    var children = _a.children, _b = _a.columnGap, columnGap = _b === void 0 ? '24' : _b, _c = _a.rowGap, rowGap = _c === void 0 ? '0' : _c, _d = _a.align, align = _d === void 0 ? 'start' : _d;
    return (react_1.default.createElement(StyledGrid, { className: "atlantum-grid", columnGap: columnGap, rowGap: rowGap, align: align }, children));
};
exports.Grid = Grid;
var templateObject_1;
//# sourceMappingURL=grid.js.map