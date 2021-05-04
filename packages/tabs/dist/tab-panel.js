var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useContext } from 'react';
import TabsContext from './tabs-context';
import styled from 'styled-components';
var StyledTabPanel = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: ", ";\n"], ["\n    padding: ", ";\n"])), function (props) { return props.theme.spacing.space24; });
export var TabPanel = function (_a) {
    var children = _a.children, id = _a.id;
    var active = useContext(TabsContext).active;
    return (React.createElement(StyledTabPanel, { tabIndex: 0, role: "tabpanel", id: "panel-" + id, "aria-labelledby": "tab-" + id, hidden: active !== id }, children));
};
var templateObject_1;
//# sourceMappingURL=tab-panel.js.map