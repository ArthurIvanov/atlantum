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
exports.Text = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var styled_components_1 = __importDefault(require("styled-components"));
var StyledText = styled_components_1.default(react_1.Fragment)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    color: ", ";\n    margin: 0;\n\n    ", "\n\n    ", "\n\n    ", "\n"], ["\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    color: ", ";\n    margin: 0;\n\n    ",
    "\n\n    ",
    "\n\n    ",
    "\n"])), function (props) { return props.theme.typography.fontSize.base; }, function (props) { return props.theme.typography.fontWeight.base; }, function (props) { return props.theme.typography.lineHeight.base; }, function (props) { return props.theme.colors.neutral[400]; }, function (props) {
    return props.centered &&
        "\n        text-align: center;\n    ";
}, function (props) {
    return props.size === 'label' &&
        "\n        font-size: " + props.theme.typography.fontSize.label + ";\n        line-height: " + props.theme.typography.lineHeight.label + ";\n    ";
}, function (props) {
    return props.size === 'subLabel' &&
        "\n        font-size: " + props.theme.typography.fontSize.subLabel + ";\n         line-height: " + props.theme.typography.lineHeight.subLabel + ";\n    ";
});
var Text = function (_a) {
    var as = _a.as, children = _a.children, size = _a.size, centered = _a.centered, className = _a.className;
    return (React.createElement(StyledText, { as: as, size: size, centered: centered, className: className }, children));
};
exports.Text = Text;
var templateObject_1;
//# sourceMappingURL=text.js.map