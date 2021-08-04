"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var react_1 = __importDefault(require("react"));
var StyledImage = styled_components_1.default.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: ", ";\n    height: ", ";\n    border-radius: 0;\n    ", "\n"], ["\n    width: ", ";\n    height: ", ";\n    border-radius: 0;\n    ",
    "\n"])), function (props) { return props.width; }, function (props) { return props.height; }, function (props) {
    return props.isRounded &&
        "\n        border-radius: " + props.theme.borderRadius + ";\n    ";
});
var Image = function (_a) {
    var _b = _a.src, src = _b === void 0 ? 'https://i.ibb.co/DLtL9b8/atlantum-bg.png' : _b, alt = _a.alt, _c = _a.width, width = _c === void 0 ? '100%' : _c, _d = _a.height, height = _d === void 0 ? '100%' : _d, isRounded = _a.isRounded, className = _a.className;
    return (react_1.default.createElement(StyledImage, { alt: alt, src: src, width: width, height: height, isRounded: isRounded, className: className }));
};
exports.Image = Image;
var templateObject_1;
//# sourceMappingURL=Image.js.map