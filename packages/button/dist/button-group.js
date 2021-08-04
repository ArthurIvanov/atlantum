"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGroup = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_1 = __importDefault(require("react"));
var StyledButtonGroup = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-flex;\n    button {\n        padding: ", ";\n    }\n\n    & > button:first-child {\n        border-bottom-right-radius: 0;\n        border-top-right-radius: 0;\n    }\n\n    & > button:last-child {\n        border-bottom-left-radius: 0;\n        border-top-left-radius: 0;\n    }\n\n    & > button:not(:first-child):not(:last-child) {\n        border-radius: 0;\n    }\n\n    & > button:not(:last-child) {\n        margin-right: 2px;\n    }\n"], ["\n    display: inline-flex;\n    button {\n        padding: ", ";\n    }\n\n    & > button:first-child {\n        border-bottom-right-radius: 0;\n        border-top-right-radius: 0;\n    }\n\n    & > button:last-child {\n        border-bottom-left-radius: 0;\n        border-top-left-radius: 0;\n    }\n\n    & > button:not(:first-child):not(:last-child) {\n        border-radius: 0;\n    }\n\n    & > button:not(:last-child) {\n        margin-right: 2px;\n    }\n"])), function (props) { return props.theme.spacing[8]; });
var ButtonGroup = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(StyledButtonGroup, null, children));
};
exports.ButtonGroup = ButtonGroup;
var templateObject_1;
//# sourceMappingURL=button-group.js.map