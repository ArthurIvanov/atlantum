"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_1 = __importDefault(require("react"));
var StyledGroup = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n    \n    ", "\n    \n    ", "\n"], ["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n    ",
    "\n\n    ",
    "\n\n    ",
    "\n\n    ",
    "\n    \n    ",
    "\n    \n    ",
    "\n"])), function (props) {
    return props.isCentered &&
        "\n            align-items: center;\n    ";
}, function (props) {
    return props.relation === 'closest' &&
        "\n        &>*:not(:last-child) {\n            margin-bottom: " + props.theme.spacing[8] + ";  \n        }\n        @media only screen and (min-width: 400px) {\n        * > *:not(:last-child) {\n            margin-bottom: " + props.theme.spacing[8] + ";\n        }\n        \n        @media only screen and (min-width: 600px) {\n        * > *:not(:last-child) {\n            margin-bottom: " + props.theme.spacing[8] + ";\n        }\n        \n        @media only screen and (min-width: 1050px) {\n        * > *:not(:last-child) {\n            margin-bottom: 0;\n        }\n    }\n        \n    }\n      \n    ";
}, function (props) {
    return props.relation === 'grouped' &&
        "\n        &>*:not(:last-child) {\n            margin-bottom: " + props.theme.spacing[16] + ";  \n        }\n        @media only screen and (min-width: 400px) {\n        * > *:not(:last-child) {\n            margin-bottom: " + props.theme.spacing[16] + ";\n        }\n        \n        @media only screen and (min-width: 600px) {\n        * > *:not(:last-child) {\n            margin-bottom: " + props.theme.spacing[16] + ";\n        }\n        \n        @media only screen and (min-width: 1050px) {\n        * > *:not(:last-child) {\n            margin-bottom: 0;\n        }\n    }\n        \n    }\n      \n    ";
}, function (props) {
    return props.relation === 'one-context' &&
        "\n        &>*:not(:last-child) {\n            margin-bottom: " + props.theme.spacing[24] + ";  \n        }\n        @media only screen and (min-width: 400px) {\n        * > *:not(:last-child) {\n            margin-bottom: " + props.theme.spacing[24] + ";\n        }\n        \n        @media only screen and (min-width: 600px) {\n        * > *:not(:last-child) {\n            margin-bottom: " + props.theme.spacing[24] + ";\n        }\n        \n        @media only screen and (min-width: 1050px) {\n        * > *:not(:last-child) {\n            margin-bottom: 0;\n        }\n    }\n        \n    }\n    ";
}, function (props) {
    return props.relation === 'separated' &&
        "\n         &>*:not(:last-child) {\n            margin-bottom: " + props.theme.spacing[32] + ";  \n        }\n        @media only screen and (min-width: 400px) {\n        * > *:not(:last-child) {\n            margin-bottom: " + props.theme.spacing[32] + ";\n        }\n        \n        @media only screen and (min-width: 600px) {\n        * > *:not(:last-child) {\n            margin-bottom: " + props.theme.spacing[32] + ";\n        }\n        \n        @media only screen and (min-width: 1050px) {\n        * > *:not(:last-child) {\n            margin-bottom: 0;\n        }\n    }\n        \n    }\n    ";
}, function (props) {
    return props.relation === 'far' &&
        "\n        &>*:not(:last-child) {\n            margin-bottom: " + props.theme.spacing[48] + ";  \n        }\n        @media only screen and (min-width: 400px) {\n        * > *:not(:last-child) {\n            margin-bottom: " + props.theme.spacing[48] + ";\n        }\n        \n        @media only screen and (min-width: 600px) {\n        * > *:not(:last-child) {\n            margin-bottom: " + props.theme.spacing[48] + ";\n        }\n        \n        @media only screen and (min-width: 1050px) {\n        * > *:not(:last-child) {\n            margin-bottom: 0;\n        }\n    }\n        \n    }\n    ";
});
var Group = function (_a) {
    var children = _a.children, relation = _a.relation, className = _a.className, isCentered = _a.isCentered;
    return (react_1.default.createElement(StyledGroup, { className: className, relation: relation, isCentered: isCentered }, children));
};
exports.Group = Group;
var templateObject_1;
//# sourceMappingURL=group.js.map