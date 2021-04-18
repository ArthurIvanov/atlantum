var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var StyledHeaderActionsGroup = styled.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 0;\n    display: flex;\n    list-style: none;\n    margin: 0 0 0 40px;\n    justify-self: flex-end;\n\n    button > *:not(:first-child) {\n        margin-left: 24px;\n    }\n"], ["\n    padding: 0;\n    display: flex;\n    list-style: none;\n    margin: 0 0 0 40px;\n    justify-self: flex-end;\n\n    button > *:not(:first-child) {\n        margin-left: 24px;\n    }\n"])));
var HeaderNavigation = function (_a) {
    var children = _a.children;
    return React.createElement(StyledHeaderActionsGroup, null, children);
};
export default HeaderNavigation;
var templateObject_1;
//# sourceMappingURL=HeaderActionsGroup.js.map