var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import React from 'react';
var StyledGroup = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n    \n    ", "\n    \n    ", "\n"], ["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n    ",
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
        "\n        &>*:not(:last-child) {\n            margin-bottom: " + props.theme.spacing.space8 + ";  \n        }\n        @media only screen and (min-width: 400px) {\n        * > *:not(:last-child) {\n            margin-bottom: " + props.theme.spacing.space8 + ";\n        }\n        \n        @media only screen and (min-width: 600px) {\n        * > *:not(:last-child) {\n            margin-bottom: " + props.theme.spacing.space8 + ";\n        }\n        \n        @media only screen and (min-width: 1050px) {\n        * > *:not(:last-child) {\n            margin-bottom: 0;\n        }\n    }\n        \n    }\n      \n    ";
}, function (props) {
    return props.relation === 'grouped' &&
        "\n        &>*:not(:last-child) {\n            margin-bottom: " + props.theme.spacing.space16 + ";  \n        }\n        @media only screen and (min-width: 400px) {\n        * > *:not(:last-child) {\n            margin-bottom: " + props.theme.spacing.space16 + ";\n        }\n        \n        @media only screen and (min-width: 600px) {\n        * > *:not(:last-child) {\n            margin-bottom: " + props.theme.spacing.space16 + ";\n        }\n        \n        @media only screen and (min-width: 1050px) {\n        * > *:not(:last-child) {\n            margin-bottom: 0;\n        }\n    }\n        \n    }\n      \n    ";
}, function (props) {
    return props.relation === 'one-context' &&
        "\n        &>*:not(:last-child) {\n            margin-bottom: " + props.theme.spacing.space24 + ";  \n        }\n        @media only screen and (min-width: 400px) {\n        * > *:not(:last-child) {\n            margin-bottom: " + props.theme.spacing.space24 + ";\n        }\n        \n        @media only screen and (min-width: 600px) {\n        * > *:not(:last-child) {\n            margin-bottom: " + props.theme.spacing.space24 + ";\n        }\n        \n        @media only screen and (min-width: 1050px) {\n        * > *:not(:last-child) {\n            margin-bottom: 0;\n        }\n    }\n        \n    }\n    ";
}, function (props) {
    return props.relation === 'separated' &&
        "\n         &>*:not(:last-child) {\n            margin-bottom: " + props.theme.spacing.space32 + ";  \n        }\n        @media only screen and (min-width: 400px) {\n        * > *:not(:last-child) {\n            margin-bottom: " + props.theme.spacing.space32 + ";\n        }\n        \n        @media only screen and (min-width: 600px) {\n        * > *:not(:last-child) {\n            margin-bottom: " + props.theme.spacing.space32 + ";\n        }\n        \n        @media only screen and (min-width: 1050px) {\n        * > *:not(:last-child) {\n            margin-bottom: 0;\n        }\n    }\n        \n    }\n    ";
}, function (props) {
    return props.relation === 'far' &&
        "\n        &>*:not(:last-child) {\n            margin-bottom: " + props.theme.spacing.space48 + ";  \n        }\n        @media only screen and (min-width: 400px) {\n        * > *:not(:last-child) {\n            margin-bottom: " + props.theme.spacing.space48 + ";\n        }\n        \n        @media only screen and (min-width: 600px) {\n        * > *:not(:last-child) {\n            margin-bottom: " + props.theme.spacing.space48 + ";\n        }\n        \n        @media only screen and (min-width: 1050px) {\n        * > *:not(:last-child) {\n            margin-bottom: 0;\n        }\n    }\n        \n    }\n    ";
});
export var Group = function (_a) {
    var children = _a.children, relation = _a.relation, className = _a.className, isCentered = _a.isCentered;
    return (React.createElement(StyledGroup, { className: className, relation: relation, isCentered: isCentered }, children));
};
var templateObject_1;
//# sourceMappingURL=group.js.map