var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useContext } from 'react';
import styled from 'styled-components';
import TabsContext from './tabs-context';
var StyledTab = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: block;\n    cursor: pointer;\n    background-color: transparent;\n    border: none;\n    padding: 1rem;\n"], ["\n    display: block;\n    cursor: pointer;\n    background-color: transparent;\n    border: none;\n    padding: 1rem;\n"])));
export var Tab = function (_a) {
    var children = _a.children, id = _a.id;
    var _b = useContext(TabsContext), active = _b.active, setActive = _b.setActive;
    var isSelected = active === id;
    return (React.createElement(StyledTab, { role: "tab", "aria-selected": isSelected, "aria-controls": "panel-" + id, id: "tab-" + id, tabIndex: isSelected ? 0 : -1, onClick: function () { return setActive && setActive(id); } }, children));
};
var templateObject_1;
//# sourceMappingURL=tab.js.map