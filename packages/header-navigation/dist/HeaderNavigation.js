var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var StyledHeaderNavigation = styled.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 0;\n    display: flex;\n    list-style: none;\n    margin: 0 0 0 40px;\n    a {\n        color: ", ";\n    }\n\n    & > *:not(:last-child) {\n        margin-right: 24px;\n    }\n"], ["\n    padding: 0;\n    display: flex;\n    list-style: none;\n    margin: 0 0 0 40px;\n    a {\n        color: ", ";\n    }\n\n    & > *:not(:last-child) {\n        margin-right: 24px;\n    }\n"])), function (props) { return props.theme.colors.text; });
var HeaderNavigation = function (props) {
    return React.createElement(StyledHeaderNavigation, null, props.children);
};
export default HeaderNavigation;
var templateObject_1;
//# sourceMappingURL=HeaderNavigation.js.map