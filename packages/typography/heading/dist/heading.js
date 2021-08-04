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
exports.Heading = void 0;
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var react_1 = require("react");
var StyledHeading = styled_components_1.default(react_1.Fragment)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin: 0;\n    font-weight: ", ";\n    font-family: ", ";\n    color: ", ";\n\n    ", "\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n"], ["\n    margin: 0;\n    font-weight: ", ";\n    font-family: ", ";\n    color: ", ";\n\n    ",
    "\n\n    ",
    ";\n\n    ",
    ";\n\n    ",
    ";\n\n    ",
    ";\n\n    ",
    ";\n\n    ",
    ";\n"])), function (props) { return props.theme.typography.fontWeight.semiBold; }, function (props) { return props.theme.typography.family.heading; }, function (props) { return props.theme.colors.neutral[400]; }, function (props) {
    return props.centered &&
        "\n         text-align: center;\n    ";
}, function (props) {
    return props.as === 'h1' &&
        "\n        font-size: " + props.theme.typography.fontSize.h1 + ";\n        line-height: " + props.theme.typography.lineHeight.h1 + ";        \n    ";
}, function (props) {
    return props.as === 'h2' &&
        "\n        font-size: " + props.theme.typography.fontSize.h2 + ";\n        line-height: " + props.theme.typography.lineHeight.h2 + ";       \n    ";
}, function (props) {
    return props.as === 'h3' &&
        "\n        font-size: " + props.theme.typography.fontSize.h3 + ";\n        line-height: " + props.theme.typography.lineHeight.h3 + ";        \n    ";
}, function (props) {
    return props.as === 'h4' &&
        "\n        font-size: " + props.theme.typography.fontSize.h4 + ";\n        line-height: " + props.theme.typography.lineHeight.h4 + ";    \n    ";
}, function (props) {
    return props.as === 'h5' &&
        "\n        font-size: " + props.theme.typography.fontSize.h5 + ";\n        line-height: " + props.theme.typography.lineHeight.h5 + ";\n    ";
}, function (props) {
    return props.as === 'h6' &&
        "\n        font-size: " + props.theme.typography.fontSize.h6 + ";\n        line-height: " + props.theme.typography.lineHeight.h6 + ";\n\n    ";
});
var Heading = function (_a) {
    var _b = _a.as, as = _b === void 0 ? 'h1' : _b, children = _a.children, centered = _a.centered, className = _a.className;
    return (React.createElement(StyledHeading, { as: as, centered: centered, className: className }, children));
};
exports.Heading = Heading;
var templateObject_1;
//# sourceMappingURL=heading.js.map