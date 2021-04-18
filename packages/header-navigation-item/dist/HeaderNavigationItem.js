var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { TextLink } from '@atlantum/text-link';
var StyledHeaderNavigationItem = styled.li(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var HeaderNavigationItem = function (_a) {
    var children = _a.children;
    return (React.createElement(StyledHeaderNavigationItem, null,
        React.createElement(TextLink, null, children)));
};
export default HeaderNavigationItem;
var templateObject_1;
//# sourceMappingURL=HeaderNavigationItem.js.map