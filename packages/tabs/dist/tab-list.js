var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var StyledTab = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n"], ["\n    display: flex;\n"])));
export var TabList = function (_a) {
    var children = _a.children, label = _a.label;
    return (React.createElement(StyledTab, { role: "tablist", tabIndex: 0, "aria-label": label }, children));
};
var templateObject_1;
//# sourceMappingURL=tab-list.js.map