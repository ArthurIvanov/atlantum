import styled from 'styled-components';
import React from 'react';
import { FC, ReactNode } from 'react';

export type AccordionSize = 'compact' | 'standard' | 'large';

export interface AccordionProps {
    children: ReactNode;
    size?: AccordionSize;
    // @Todo Implement this style
    isWithSeparator?: boolean;
    isHorizontal?: boolean;
}

const StyledAccordion = styled.ul<AccordionProps>`
    font-family: ${(props) => props.theme.typography.family.base};
    font-size: ${(props) => props.theme.typography.fontSize.base};
    line-height: ${(props) => props.theme.typography.lineHeight.base};
    font-weight: ${(props) => props.theme.typography.fontWeight.base};
    list-style: none;
    color: ${(props) => props.theme.colors.neutral400};
    padding: ${(props) => props.theme.spacing.space12} 0;
    margin: 0;
    width: 100%;
`;

const Accordion: FC<AccordionProps> = ({ isWithSeparator, size, children }) => {
    return (
        <StyledAccordion size={size} isWithSeparator={isWithSeparator}>
            {children}
        </StyledAccordion>
    );
};

export default Accordion;
