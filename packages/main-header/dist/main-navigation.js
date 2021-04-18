var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Menu } from 'react-feather';
import { X } from 'react-feather';
var StyledMainHeader = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n  right: 0;\n  left: 0;\n  top: ", ";\n  height: ", ";\n  padding: 0  ", ";\n  position: fixed;\n  \n  &::before {\n  position:absolute;\n  background: linear-gradient(180deg, rgba(245, 245, 247, 1) 50%, rgba(245, 245, 247, 0) 100%);\n  content: '';\n  height: ", ";\n  width: 100%;\n  top: -", ";\n  left: 0;\n  z-index: 10;\n  display: block;\n  \n}\n\n    .atlantum-main-header {\n        border-radius: ", ";\n        color: ", ";   \n        padding: ", ";\n        display: flex;\n        position: relative;\n        z-index: 100;\n        align-items: center;\n        justify-items: center;\n        background-color: ", ";\n        box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);   \n    \n        }\n    \n    a,\n    a:active,\n    a:visited {\n        display: block;\n        text-decoration: none;\n        margin: 0 0 0 ", ";\n        color: ", ";\n    }\n\n    button.atlantum-header-button {\n        display: block;\n        margin: 0;\n        padding: 0;\n        outline: none;\n        border: none;\n        background-color: transparent;\n    }\n\n    .atlantum-header-icon {\n        display: none;\n        color: ", ";\n        @media only screen and (max-width: 1050px) {\n            display: block;\n            margin: 0 ", ";\n        }\n    }\n      \n    }\n    \n"], ["\n\n  right: 0;\n  left: 0;\n  top: ", ";\n  height: ", ";\n  padding: 0  ", ";\n  position: fixed;\n  \n  &::before {\n  position:absolute;\n  background: linear-gradient(180deg, rgba(245, 245, 247, 1) 50%, rgba(245, 245, 247, 0) 100%);\n  content: '';\n  height: ", ";\n  width: 100%;\n  top: -", ";\n  left: 0;\n  z-index: 10;\n  display: block;\n  \n}\n\n    .atlantum-main-header {\n        border-radius: ", ";\n        color: ", ";   \n        padding: ", ";\n        display: flex;\n        position: relative;\n        z-index: 100;\n        align-items: center;\n        justify-items: center;\n        background-color: ", ";\n        box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);   \n    \n        }\n    \n    a,\n    a:active,\n    a:visited {\n        display: block;\n        text-decoration: none;\n        margin: 0 0 0 ", ";\n        color: ", ";\n    }\n\n    button.atlantum-header-button {\n        display: block;\n        margin: 0;\n        padding: 0;\n        outline: none;\n        border: none;\n        background-color: transparent;\n    }\n\n    .atlantum-header-icon {\n        display: none;\n        color: ", ";\n        @media only screen and (max-width: 1050px) {\n            display: block;\n            margin: 0 ", ";\n        }\n    }\n      \n    }\n    \n"])), function (props) { return props.theme.spacing.space24; }, function (props) { return props.theme.spacing.space72; }, function (props) { return props.theme.spacing.space24; }, function (props) { return props.theme.spacing.space72; }, function (props) { return props.theme.spacing.space24; }, function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.colors.text; }, function (props) { return props.theme.spacing.space24; }, function (props) { return props.theme.colors.neutralLighter; }, function (props) { return props.theme.spacing.space12; }, function (props) { return props.theme.colors.textInverted; }, function (props) { return props.theme.colors.text; }, function (props) { return props.theme.spacing.space12; });
export var MainNavigation = function (props) {
    var _a = __read(useState(false), 2), checked = _a[0], setChecked = _a[1];
    var _b = __read(useState(0), 2), windowWidth = _b[0], setWindowSize = _b[1];
    var sidebar = document.getElementById('atlantum-sidebar');
    console.log(windowWidth);
    useEffect(function () {
        var handleResize = function () {
            setWindowSize(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return function () { return window.removeEventListener('resize', handleResize); };
    }, []);
    if (windowWidth != undefined) {
        if (windowWidth < 1050) {
            if (sidebar !== null) {
                sidebar.style.left = '-304px';
            }
        }
        else if (windowWidth > 1050 && checked) {
            setChecked(false);
            if (sidebar) {
                sidebar.style.left = '24px';
                sidebar.style.transform = 'translateX(0px)';
            }
        }
        else {
            if (sidebar) {
                sidebar.style.left = '24px';
                sidebar.style.transform = 'translateX(0px)';
            }
        }
    }
    var onClick = function () {
        setChecked(!checked);
        if (!checked) {
            if (sidebar !== null) {
                sidebar.style.transform = 'translateX(328px)';
            }
        }
        else if (checked) {
            if (sidebar !== null) {
                sidebar.style.transform = 'translateX(0px)';
            }
        }
    };
    return (React.createElement(StyledMainHeader, null,
        React.createElement("header", { className: "atlantum-main-header" },
            React.createElement("button", { className: "atlantum-header-button", onClick: onClick }, checked ? (React.createElement(X, { className: "atlantum-header-icon", size: 24 })) : (React.createElement(Menu, { className: "atlantum-header-icon", size: 24 }))),
            props.children)));
};
var templateObject_1;
//# sourceMappingURL=main-navigation.js.map