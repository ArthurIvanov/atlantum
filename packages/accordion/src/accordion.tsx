import styled from 'styled-components';
import React from 'react';
import { FC, ReactNode } from 'react';

export type AccordionSize = 'compact' | 'standard' | 'large';

export interface AccordionProps {
    /**
     * Required field, you need to pass there accordion-item component.
     */
    children: ReactNode;

    // @Todo Implement accordion size prop
    size?: AccordionSize;

    // @Todo Implement with-separator prop
    isWithSeparator?: boolean;

    // @Todo Implement horizontal| vertical alignment prop
    isHorizontal?: boolean;

    /**
     * Allow apply custom classes to component
     */
    className?: string;
}

const StyledAccordion = styled.ul<AccordionProps>`
    font-family: ${(props) => props.theme.typography.family.base};
    font-size: ${(props) => props.theme.typography.fontSize.base};
    line-height: ${(props) => props.theme.typography.lineHeight.base};
    font-weight: ${(props) => props.theme.typography.fontWeight.base};
    list-style: none;
    color: ${(props) => props.theme.colors.neutral[400]};
    padding: ${(props) => props.theme.spacing[12]} 0;
    margin: 0;
    width: 100%;
`;

export const Accordion: FC<AccordionProps> = ({ children, className }) => {
    return <StyledAccordion className={className}>{children}</StyledAccordion>;
};
