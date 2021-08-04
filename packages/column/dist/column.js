"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledColumn = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n\n    @media only screen and (min-width: ", ") {\n        grid-column: ", ";\n    }\n\n    @media only screen and (min-width: ", ") {\n        grid-column: ", ";\n    }\n    @media only screen and (min-width: ", ") {\n        grid-column: ", ";\n    }\n"], ["\n    display: flex;\n    align-items: center;\n\n    @media only screen and (min-width: ",
    ") {\n        grid-column: ", ";\n    }\n\n    @media only screen and (min-width: ",
    ") {\n        grid-column: ", ";\n    }\n    @media only screen and (min-width: ",
    ") {\n        grid-column: ", ";\n    }\n"])), function (props) {
    return props.theme.layout.smallBp;
}, function (props) { return props.smallBP; }, function (props) {
    return props.theme.layout.mediumBp;
}, function (props) { return props.mediumBP; }, function (props) {
    return props.theme.layout.largeBp;
}, function (props) { return props.largeBP; });
var Column = function (_a) {
    var children = _a.children, _b = _a.smallBP, smallBP = _b === void 0 ? '1 / 13' : _b, _c = _a.mediumBP, mediumBP = _c === void 0 ? '1 / 13' : _c, _d = _a.largeBP, largeBP = _d === void 0 ? '1 / 13' : _d, className = _a.className;
    return (react_1.default.createElement(StyledColumn, { className: className, smallBP: smallBP, mediumBP: mediumBP, largeBP: largeBP }, children));
};
exports.Column = Column;
var templateObject_1;
//# sourceMappingURL=column.js.map