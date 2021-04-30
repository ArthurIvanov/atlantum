var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import React, { useState, Children, useRef, useLayoutEffect, } from 'react';
import TabsContext from './tabs-context';
export var Tabs = function (_a) {
    var defaultActive = _a.defaultActive, activeTab = _a.active, onChangeHandler = _a.onChange, children = _a.children;
    var tabs = useRef([]);
    var _b = __read(useState(activeTab || defaultActive), 2), active = _b[0], setActive = _b[1];
    useLayoutEffect(function () {
        tabs.current = Children.toArray(children).filter(function (child) {
            return (
            //@ts-ignore
            React.isValidElement(child) && child.type.name === 'TabPanel');
        });
    }, [children]);
    var onChange = function (id) {
        onChangeHandler && onChangeHandler(id);
        if (!activeTab) {
            setActive(id);
        }
    };
    return (React.createElement(TabsContext.Provider, { value: {
            active: active,
            setActive: onChange,
        } }, children));
};
//# sourceMappingURL=tabs.js.map