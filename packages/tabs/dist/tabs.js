"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = void 0;
var react_1 = __importStar(require("react"));
var tabs_context_1 = __importDefault(require("./tabs-context"));
var Tabs = function (_a) {
    var defaultActive = _a.defaultActive, activeTab = _a.active, onChangeHandler = _a.onChange, children = _a.children;
    var tabs = react_1.useRef([]);
    var _b = __read(react_1.useState(activeTab || defaultActive), 2), active = _b[0], setActive = _b[1];
    react_1.useLayoutEffect(function () {
        tabs.current = react_1.Children.toArray(children).filter(function (child) {
            return (
            //@ts-ignore
            react_1.default.isValidElement(child) && child.type.name === 'TabPanel');
        });
    }, [children]);
    var onChange = function (id) {
        onChangeHandler && onChangeHandler(id);
        if (!activeTab) {
            setActive(id);
        }
    };
    return (react_1.default.createElement(tabs_context_1.default.Provider, { value: {
            active: active,
            setActive: onChange,
        } }, children));
};
exports.Tabs = Tabs;
//# sourceMappingURL=tabs.js.map