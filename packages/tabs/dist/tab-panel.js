"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabPanel = void 0;
var react_1 = __importStar(require("react"));
var tabs_context_1 = __importDefault(require("./tabs-context"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledTabPanel = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: ", ";\n"], ["\n    padding: ", ";\n"])), function (props) { return props.theme.spacing[24]; });
var TabPanel = function (_a) {
    var children = _a.children, id = _a.id;
    var active = react_1.useContext(tabs_context_1.default).active;
    return (react_1.default.createElement(StyledTabPanel, { tabIndex: 0, role: "tabpanel", id: "panel-" + id, "aria-labelledby": "tab-" + id, hidden: active !== id }, children));
};
exports.TabPanel = TabPanel;
var templateObject_1;
//# sourceMappingURL=tab-panel.js.map