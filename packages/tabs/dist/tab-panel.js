import React, { useContext } from 'react';
import TabsContext from './tabs-context';
export var TabPanel = function (_a) {
    var children = _a.children, id = _a.id;
    var active = useContext(TabsContext).active;
    console.log(id);
    return (React.createElement("div", { tabIndex: 0, role: "tabpanel", id: "panel-" + id, "aria-labelledby": "tab-" + id, hidden: active !== id },
        React.createElement("div", null, children)));
};
//# sourceMappingURL=tab-panel.js.map