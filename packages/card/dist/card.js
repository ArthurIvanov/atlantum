var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import React from 'react';
var StyledCard = styled.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-radius: ", ";\n    background-color: ", ";\n    display: flex;\n    flex-direction: column;\n    box-shadow: 0 0 16px ", "04;\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n\n    ", ";\n"], ["\n    border-radius: ", ";\n    background-color: ", ";\n    display: flex;\n    flex-direction: column;\n    box-shadow: 0 0 16px ", "04;\n\n    ",
    ";\n\n    ",
    ";\n\n    ",
    ";\n\n    ",
    ";\n\n    ",
    ";\n"])), function (props) { return props.theme.borderRadius; }, function (props) { return props.theme.colors.neutralContentBG; }, function (props) { return props.theme.colors.neutral400; }, function (props) {
    return props.size === 'full' &&
        "\n        padding: 0; \n    ";
}, function (props) {
    return props.size === 'large' &&
        "\n        padding: " + props.theme.spacing.space12 + "; \n    ";
}, function (props) {
    return props.size === 'standard' &&
        "\n        padding: " + props.theme.spacing.space24 + "; \n    ";
}, function (props) {
    return props.size === 'compact' &&
        "\n        padding: " + props.theme.spacing.space48 + "; \n    ";
}, function (props) {
    return props.size === 'landing' &&
        "\n        padding: " + props.theme.spacing.space64 + "; \n    ";
});
export var Card = function (_a) {
    var size = _a.size, children = _a.children, className = _a.className;
    return (React.createElement(StyledCard, { size: size, className: className }, children));
};
var templateObject_1;
//# sourceMappingURL=card.js.map