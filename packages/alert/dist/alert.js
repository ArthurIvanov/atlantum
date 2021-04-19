var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { Icon } from '@atlantum/icons';
import { Heading } from '@atlantum/heading';
import { ItemsStack } from '@atlantum/items-stack';
var StyledAlert = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    display: flex;\n    max-width: 500px;\n    font-size: ", ";\n    line-height: ", ";\n    padding: 16px 48px 16px 48px;\n    border: 1px solid;\n    border-radius: ", ";\n    color: ", ";\n\n    .atlantum-status-content {\n        position: absolute;\n        left: ", ";\n        top: ", ";\n    }\n\n    .atlantum-close-button {\n        position: absolute;\n        right: ", ";\n        top: ", ";\n        cursor: pointer;\n    }\n\n    ", "\n\n    ", "\n    \n    ", "\n\n    ", "\n"], ["\n    position: relative;\n    display: flex;\n    max-width: 500px;\n    font-size: ", ";\n    line-height: ", ";\n    padding: 16px 48px 16px 48px;\n    border: 1px solid;\n    border-radius: ", ";\n    color: ", ";\n\n    .atlantum-status-content {\n        position: absolute;\n        left: ", ";\n        top: ", ";\n    }\n\n    .atlantum-close-button {\n        position: absolute;\n        right: ", ";\n        top: ", ";\n        cursor: pointer;\n    }\n\n    ",
    "\n\n    ",
    "\n    \n    ",
    "\n\n    ",
    "\n"])), function (props) { return props.theme.typography.fontSize.base; }, function (props) { return props.theme.typography.lineHeight.base; }, function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.colors.neutral400; }, function (props) { return props.theme.spacing.space16; }, function (props) { return props.theme.spacing.space16; }, function (props) { return props.theme.spacing.space16; }, function (props) { return props.theme.spacing.space16; }, function (props) {
    return props.alertStatus === 'info' &&
        " \n        border-color: " + props.theme.colors.info200 + ";\n        background-color: " + props.theme.colors.infoBG + "; \n        \n        .atlantum-status-content {\n            color: " + props.theme.colors.info200 + ";\n        }\n             \n    }\n    ";
}, function (props) {
    return props.alertStatus === 'success' &&
        " \n        border-color: " + props.theme.colors.success200 + ";\n        background-color: " + props.theme.colors.successBG + "; \n        \n        .atlantum-status-content {\n            color: " + props.theme.colors.success200 + ";\n        }\n             \n    }\n    ";
}, function (props) {
    return props.alertStatus === 'warning' &&
        " \n        border-color: " + props.theme.colors.warning200 + ";\n        background-color: " + props.theme.colors.warningBG + "; \n        \n        .atlantum-status-content {\n            color: " + props.theme.colors.warning200 + ";\n        }\n             \n    }\n    ";
}, function (props) {
    return props.alertStatus === 'danger' &&
        " \n        border-color: " + props.theme.colors.danger200 + ";\n        background-color: " + props.theme.colors.dangerBG + "; \n        \n        .atlantum-status-content {\n            color: " + props.theme.colors.danger200 + ";\n\n        }\n             \n    }\n    ";
});
export var Alert = function (_a) {
    var children = _a.children, alertStatus = _a.alertStatus, className = _a.className, alertTitle = _a.alertTitle, isClosable = _a.isClosable;
    return (React.createElement(StyledAlert, { alertStatus: alertStatus, className: className },
        React.createElement(AlertIcon, { alertStatus: alertStatus }),
        React.createElement(CloseIcon, { className: className, isClosable: isClosable }),
        React.createElement(ItemsStack, { direction: 'column', distance: '8px' },
            alertTitle && (React.createElement(AlertTitle, { className: "atlantum-alert-headline", alertTitle: alertTitle }, alertTitle)),
            React.createElement("span", null, children))));
};
export var AlertIcon = function (_a) {
    var alertStatus = _a.alertStatus;
    return (React.createElement(React.Fragment, null,
        alertStatus === 'danger' && (React.createElement(Icon, { className: "atlantum-status-content", name: "alert-triangle" })),
        alertStatus === 'info' && (React.createElement(Icon, { className: "atlantum-status-content", name: "info" })),
        alertStatus === 'success' && (React.createElement(Icon, { className: "atlantum-status-content", name: "check-circle" })),
        alertStatus === 'warning' && (React.createElement(Icon, { className: "atlantum-status-content", name: "alert-circle" }))));
};
export var CloseIcon = function (_a) {
    var isClosable = _a.isClosable;
    return (React.createElement(React.Fragment, null, isClosable && (React.createElement(Icon, { className: "atlantum-close-button", name: "close" }))));
};
export var AlertTitle = function (_a) {
    var alertTitle = _a.alertTitle;
    return (React.createElement(Heading, { as: "h6" }, alertTitle));
};
var templateObject_1;
//# sourceMappingURL=alert.js.map