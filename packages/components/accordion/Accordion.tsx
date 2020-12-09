import styled from 'styled-components';
import * as React from 'react';
import { FC, ReactNode } from 'react';

export type AccordionSize = 'compact' | 'standard' | 'large';

export interface AccordionProps {
    children: ReactNode;
    size?: AccordionSize;
    withSeparator?: boolean;
}

const StyledAccordion = styled.ul<AccordionProps>`
    font-family: ${(props) => props.theme.typography.family.base};
    font-size: ${(props) => props.theme.typography.fontSize.base};
    line-height: ${(props) => props.theme.typography.lineHeight.base};
    font-weight: ${(props) => props.theme.typography.fontWeight.base};
    list-style: none;
    color: ${(props) => props.theme.colors.text};
    padding: 0;
    margin: 0;
    width: 100%;

    .atlantum-accordion-icon {
        color: ${(props) => props.theme.colors.text};
    }

    & > li:not(:last-child) {
        margin-bottom: ${(props) => props.theme.spacing.space12};
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.text};
        margin: 0;
        padding: 0;
    }
`;

const Accordion: FC<AccordionProps> = ({
    withSeparator,
    size,

    children,
}) => {
    return (
        <StyledAccordion size={size} withSeparator={withSeparator}>
            {children}
        </StyledAccordion>
    );
};

export default Accordion;
