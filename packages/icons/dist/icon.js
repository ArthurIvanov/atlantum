"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var html_react_parser_1 = __importDefault(require("html-react-parser"));
var set_1 = __importDefault(require("./set"));
var StyledIcon = function (_a) {
    var name = _a.name, props = __rest(_a, ["name"]);
    var myParse = html_react_parser_1.default(set_1.default[name]);
    var _b = props.size, size = _b === void 0 ? 24 : _b, _c = props.strokeWidth, strokeWidth = _c === void 0 ? 2 : _c, onClick = props.onClick, otherProps = __rest(props, ["size", "strokeWidth", "onClick"]);
    return (react_1.default.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: 'currentColor', strokeWidth: strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", onClick: onClick }, otherProps), myParse));
};
exports.Icon = styled_components_1.default(StyledIcon)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var templateObject_1;
//# sourceMappingURL=icon.js.map