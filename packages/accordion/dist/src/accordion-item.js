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
import styled from 'styled-components';
import React from 'react';
import { useState } from 'react';
import { ChevronDown } from 'react-feather';
var StyledAccordionItem = styled.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ul > li {\n        padding: ", ";\n        padding-left: ", ";\n        a:hover {\n            color: ", ";\n        }\n    }\n    .atlantum-accordion-item--title {\n        outline: none;\n        cursor: pointer;\n        border-radius: ", ";\n        font-weight: ", ";\n        font-size: ", ";\n        font-family: ", ";\n        display: flex;\n        width: 100%;\n        border: none;\n        background-color: transparent;\n        align-items: center;\n        justify-content: space-between;\n        margin: 0;\n        padding: ", "\n            ", ";\n        transition: 0.2s ease;\n        color: ", ";\n\n        &:hover {\n            color: ", ";\n        }\n\n        &:focus {\n            box-shadow: 0 0 0 2px ", ";\n            color: ", ";\n        }\n    }\n\n    .atlantum-accordion-item--content {\n        font-weight: ", ";\n        list-style: none;\n        padding: 0;\n        & > a {\n            padding-left: ", ";\n        }\n    }\n    .atlantum-accordion-item--content__closed {\n        display: none;\n    }\n\n    .atlantum-accordion-item--content__open {\n        display: block;\n    }\n    .atlantum-accordion--icon {\n        transition: transform 0.1s ease;\n\n        &__rotated {\n            transform: rotateZ(180deg);\n        }\n    }\n"], ["\n    ul > li {\n        padding: ", ";\n        padding-left: ", ";\n        a:hover {\n            color: ", ";\n        }\n    }\n    .atlantum-accordion-item--title {\n        outline: none;\n        cursor: pointer;\n        border-radius: ", ";\n        font-weight: ", ";\n        font-size: ", ";\n        font-family: ", ";\n        display: flex;\n        width: 100%;\n        border: none;\n        background-color: transparent;\n        align-items: center;\n        justify-content: space-between;\n        margin: 0;\n        padding: ", "\n            ", ";\n        transition: 0.2s ease;\n        color: ", ";\n\n        &:hover {\n            color: ", ";\n        }\n\n        &:focus {\n            box-shadow: 0 0 0 2px ", ";\n            color: ", ";\n        }\n    }\n\n    .atlantum-accordion-item--content {\n        font-weight: ", ";\n        list-style: none;\n        padding: 0;\n        & > a {\n            padding-left: ", ";\n        }\n    }\n    .atlantum-accordion-item--content__closed {\n        display: none;\n    }\n\n    .atlantum-accordion-item--content__open {\n        display: block;\n    }\n    .atlantum-accordion--icon {\n        transition: transform 0.1s ease;\n\n        &__rotated {\n            transform: rotateZ(180deg);\n        }\n    }\n"])), function (props) { return props.theme.spacing.space12; }, function (props) { return props.theme.spacing.space24; }, function (props) { return props.theme.colors.primary200; }, function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.typography.fontWeight.semiBold; }, function (props) { return props.theme.typography.fontSize.base; }, function (props) { return props.theme.typography.family.base; }, function (props) { return props.theme.spacing.space8; }, function (props) { return props.theme.spacing.space24; }, function (props) { return props.theme.colors.neutral400; }, function (props) { return props.theme.colors.primary200; }, function (props) { return props.theme.colors.primary100; }, function (props) { return props.theme.colors.primary200; }, function (props) { return props.theme.typography.fontWeight.regular; }, function (props) { return props.theme.spacing.space24; });
export var AccordionItem = function (_a) {
    var title = _a.title, children = _a.children, onClick = _a.onClick, className = _a.className;
    var _b = __read(useState(false), 2), open = _b[0], setOpen = _b[1];
    onClick = function () {
        setOpen(!open);
    };
    return (React.createElement(StyledAccordionItem, { title: title, className: className },
        React.createElement("button", { className: "atlantum-accordion-item--title", onClick: onClick },
            title,
            React.createElement(ChevronDown, { size: 24, className: "" + (open
                    ? 'atlantum-accordion--icon atlantum-accordion--icon__rotated'
                    : 'atlantum-accordion--icon') })),
        React.createElement("ul", { className: "" + (open
                ? 'atlantum-accordion-item--content atlantum-accordion-item--content__open'
                : 'atlantum-accordion-item--content atlantum-accordion-item--content__closed') }, children)));
};
var templateObject_1;
//# sourceMappingURL=accordion-item.js.map