import styled from 'styled-components';
import React from 'react';
import { FC, ReactNode } from 'react';

export type AccordionSize = 'compact' | 'standard' | 'large';

export interface AccordionProps {
    /**
     * Mandatory field, you need to enter a button label.
     */
    children: ReactNode;

    // @Todo Implement accordion size prop
    size?: AccordionSize;

    // @Todo Implement with-separator prop
    isWithSeparator?: boolean;

    // @Todo Implement horizontal| vertical alignment prop
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

const Accordion: FC<AccordionProps> = ({ children }) => {
    return <StyledAccordion>{children}</StyledAccordion>;
};

export default Accordion;
