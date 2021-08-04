"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin-top: 96px;\n    width: 100%;\n\n    section:not(:last-child) {\n        margin-bottom: 24px;\n    }\n\n    ", "\n    ", ";\n"], ["\n    margin-top: 96px;\n    width: 100%;\n\n    section:not(:last-child) {\n        margin-bottom: 24px;\n    }\n\n    ",
    "\n    ",
    ";\n"])), function (props) {
    return props.align === 'sidebar' &&
        "\n        @media only screen and (min-width: " + props.theme.layout.mediumBp + ") {\n        margin-left:0;\n    }\n        @media only screen and (min-width: " + props.theme.layout.largeBp + ") {\n            margin-left: 280px;\n        }\n    ";
}, function (props) {
    return props.align === 'centered' &&
        "\n        @media only screen and (min-width: " + props.theme.layout.mediumBp + ") {\n        margin-left: auto;\n        margin-right: auto;\n    }\n        @media only screen and (min-width: " + props.theme.layout.largeBp + ") {\n           margin-left: auto;\n            margin-right: auto;\n        }\n    ";
});
var Container = function (_a) {
    var children = _a.children, align = _a.align;
    return react_1.default.createElement(StyledContainer, { align: align }, children);
};
exports.default = Container;
var templateObject_1;
//# sourceMappingURL=Container.js.map