"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledContent = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    ", ";\n\n    ", "\n"], ["\n    width: 100%;\n    ",
    ";\n\n    ",
    "\n"])), function (props) {
    return props.contentWidth === 'fluid' &&
        "\n            max-width: " + props.theme.layout.fluidWidth + ";\n        ";
}, function (props) {
    return props.contentWidth === 'fixed' &&
        "\n            max-width: " + props.theme.layout.fixedWidth + ";\n            align-self: center;    \n        ";
});
var Content = function (_a) {
    var children = _a.children, contentWidth = _a.contentWidth;
    return (react_1.default.createElement(StyledContent, { contentWidth: contentWidth }, children));
};
exports.Content = Content;
var templateObject_1;
//# sourceMappingURL=content.js.map