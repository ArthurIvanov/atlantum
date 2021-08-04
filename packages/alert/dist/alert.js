"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertTitle = exports.CloseIcon = exports.AlertIcon = exports.Alert = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var icons_1 = require("@atlantum/icons");
var heading_1 = require("@atlantum/heading");
var items_stack_1 = require("@atlantum/items-stack");
var StyledAlert = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    display: flex;\n    max-width: 500px;\n    font-size: ", ";\n    line-height: ", ";\n    padding: ", "\n        ", ";\n    border: 1px solid;\n    border-radius: ", ";\n    color: ", ";\n\n    .atlantum-status-content {\n        position: absolute;\n        left: ", ";\n        top: ", ";\n    }\n\n    .atlantum-close-button {\n        position: absolute;\n        right: ", ";\n        top: ", ";\n        cursor: pointer;\n    }\n\n    ", "\n\n    ", "\n    \n    ", "\n\n    ", "\n"], ["\n    position: relative;\n    display: flex;\n    max-width: 500px;\n    font-size: ", ";\n    line-height: ", ";\n    padding: ", "\n        ", ";\n    border: 1px solid;\n    border-radius: ", ";\n    color: ", ";\n\n    .atlantum-status-content {\n        position: absolute;\n        left: ", ";\n        top: ", ";\n    }\n\n    .atlantum-close-button {\n        position: absolute;\n        right: ", ";\n        top: ", ";\n        cursor: pointer;\n    }\n\n    ",
    "\n\n    ",
    "\n    \n    ",
    "\n\n    ",
    "\n"])), function (props) { return props.theme.typography.fontSize.base; }, function (props) { return props.theme.typography.lineHeight.base; }, function (props) { return props.theme.spacing[16]; }, function (props) { return props.theme.spacing[48]; }, function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.colors.neutral[400]; }, function (props) { return props.theme.spacing[16]; }, function (props) { return props.theme.spacing[16]; }, function (props) { return props.theme.spacing[16]; }, function (props) { return props.theme.spacing[16]; }, function (props) {
    return props.alertStatus === 'info' &&
        " \n        border-color: " + props.theme.colors.info[200] + ";\n        background-color: " + props.theme.colors.info[500] + "; \n        \n        .atlantum-status-content {\n            color: " + props.theme.colors.info[200] + ";\n        }\n             \n    }\n    ";
}, function (props) {
    return props.alertStatus === 'success' &&
        " \n        border-color: " + props.theme.colors.success[200] + ";\n        background-color: " + props.theme.colors.success[500] + "; \n        \n        .atlantum-status-content {\n            color: " + props.theme.colors.success[200] + ";\n        }\n             \n    }\n    ";
}, function (props) {
    return props.alertStatus === 'warning' &&
        " \n        border-color: " + props.theme.colors.warning[200] + ";\n        background-color: " + props.theme.colors.warning[500] + "; \n        \n        .atlantum-status-content {\n            color: " + props.theme.colors.warning[200] + ";\n        }\n             \n    }\n    ";
}, function (props) {
    return props.alertStatus === 'danger' &&
        " \n        border-color: " + props.theme.colors.danger[200] + ";\n        background-color: " + props.theme.colors.danger[500] + "; \n        \n        .atlantum-status-content {\n            color: " + props.theme.colors.danger[200] + ";\n\n        }\n             \n    }\n    ";
});
var Alert = function (_a) {
    var children = _a.children, alertStatus = _a.alertStatus, className = _a.className, alertTitle = _a.alertTitle, isClosable = _a.isClosable;
    return (react_1.default.createElement(StyledAlert, { alertStatus: alertStatus, className: className },
        react_1.default.createElement(exports.AlertIcon, { alertStatus: alertStatus }),
        react_1.default.createElement(exports.CloseIcon, { className: className, isClosable: isClosable }),
        react_1.default.createElement(items_stack_1.ItemsStack, { direction: 'column', distance: '8px' },
            alertTitle && (react_1.default.createElement(exports.AlertTitle, { className: "atlantum-alert-headline", alertTitle: alertTitle }, alertTitle)),
            react_1.default.createElement("span", null, children))));
};
exports.Alert = Alert;
var AlertIcon = function (_a) {
    var alertStatus = _a.alertStatus;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        alertStatus === 'danger' && (react_1.default.createElement(icons_1.Icon, { className: "atlantum-status-content", name: "alert-triangle" })),
        alertStatus === 'info' && (react_1.default.createElement(icons_1.Icon, { className: "atlantum-status-content", name: "info" })),
        alertStatus === 'success' && (react_1.default.createElement(icons_1.Icon, { className: "atlantum-status-content", name: "check-circle" })),
        alertStatus === 'warning' && (react_1.default.createElement(icons_1.Icon, { className: "atlantum-status-content", name: "alert-circle" }))));
};
exports.AlertIcon = AlertIcon;
var CloseIcon = function (_a) {
    var isClosable = _a.isClosable;
    return (react_1.default.createElement(react_1.default.Fragment, null, isClosable && (react_1.default.createElement(icons_1.Icon, { className: "atlantum-close-button", name: "close" }))));
};
exports.CloseIcon = CloseIcon;
var AlertTitle = function (_a) {
    var alertTitle = _a.alertTitle;
    return (react_1.default.createElement(heading_1.Heading, { as: "h6" }, alertTitle));
};
exports.AlertTitle = AlertTitle;
var templateObject_1;
//# sourceMappingURL=alert.js.map