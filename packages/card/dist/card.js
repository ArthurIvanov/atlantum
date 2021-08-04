"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_1 = __importDefault(require("react"));
var StyledCard = styled_components_1.default.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-radius: ", ";\n    background-color: ", ";\n    display: flex;\n    flex-direction: column;\n    box-shadow: 0 0 16px ", "024;\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n"], ["\n    border-radius: ", ";\n    background-color: ", ";\n    display: flex;\n    flex-direction: column;\n    box-shadow: 0 0 16px ", "024;\n\n    ",
    ";\n\n    ",
    ";\n\n    ",
    ";\n\n    ",
    ";\n\n    ",
    ";\n"])), function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.colors.neutral[500]; }, function (props) { return props.theme.colors.neutral[400]; }, function (props) {
    return props.size === 'full' &&
        "\n        padding: 0; \n    ";
}, function (props) {
    return props.size === 'large' &&
        "\n        padding: " + props.theme.spacing[12] + "; \n    ";
}, function (props) {
    return props.size === 'standard' &&
        "\n        padding: " + props.theme.spacing[24] + "; \n    ";
}, function (props) {
    return props.size === 'compact' &&
        "\n        padding: " + props.theme.spacing[48] + "; \n    ";
}, function (props) {
    return props.size === 'landing' &&
        "\n        padding: " + props.theme.spacing[64] + "; \n    ";
});
var Card = function (_a) {
    var size = _a.size, children = _a.children, className = _a.className;
    return (react_1.default.createElement(StyledCard, { size: size, className: className }, children));
};
exports.Card = Card;
var templateObject_1;
//# sourceMappingURL=card.js.map