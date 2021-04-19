var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var StyledContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    margin-top: 96px;\n    width: 100%;\n\n    section:not(:last-child) {\n        margin-bottom: 24px;\n    }\n\n    ", "\n    ", ";\n"], ["\n    margin-top: 96px;\n    width: 100%;\n\n    section:not(:last-child) {\n        margin-bottom: 24px;\n    }\n\n    ",
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
    return React.createElement(StyledContainer, { align: align }, children);
};
export default Container;
var templateObject_1;
//# sourceMappingURL=Container.js.map