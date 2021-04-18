var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var StyledColumn = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n\n    @media only screen and (min-width: ", ") {\n        grid-column: ", ";\n    }\n\n    @media only screen and (min-width: ", ") {\n        grid-column: ", ";\n    }\n    @media only screen and (min-width: ", ") {\n        grid-column: ", ";\n    }\n"], ["\n    display: flex;\n    align-items: center;\n\n    @media only screen and (min-width: ",
    ") {\n        grid-column: ", ";\n    }\n\n    @media only screen and (min-width: ",
    ") {\n        grid-column: ", ";\n    }\n    @media only screen and (min-width: ",
    ") {\n        grid-column: ", ";\n    }\n"])), function (props) {
    return props.theme.layout.smallBp;
}, function (props) { return props.smallBP; }, function (props) {
    return props.theme.layout.mediumBp;
}, function (props) { return props.mediumBP; }, function (props) {
    return props.theme.layout.largeBp;
}, function (props) { return props.largeBP; });
export var Column = function (_a) {
    var children = _a.children, _b = _a.smallBP, smallBP = _b === void 0 ? '1 / 13' : _b, _c = _a.mediumBP, mediumBP = _c === void 0 ? '1 / 13' : _c, _d = _a.largeBP, largeBP = _d === void 0 ? '1 / 13' : _d, className = _a.className;
    return (React.createElement(StyledColumn, { className: className, smallBP: smallBP, mediumBP: mediumBP, largeBP: largeBP }, children));
};
var templateObject_1;
//# sourceMappingURL=column.js.map