import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';

export interface CodeProps {
    /**
     * Required field, you need to enter a code block text here.
     */
    children: ReactNode;

    /**
     * Allow apply custom classes to component
     */
    className?: string;
}

const StyledCode = styled.code<CodeProps>`
    & > pre {
        margin: 0;
        padding: 0;
        display: block;
    }
    border-radius: ${(props) => props.theme.borderRadius};
    width: 100%;
    padding: ${(props) => props.theme.spacing[10]}
        ${(props) => props.theme.spacing[12]};
    font-size: ${(props) => props.theme.typography.fontSize.label};
    line-height: ${(props) => props.theme.typography.lineHeight.label};
    font-family: ${(props) => props.theme.typography.family.monospace};
    color: ${(props) => props.theme.colors.neutral[400]};
    background-color: ${(props) => props.theme.colors.neutral[600]}; ;
`;

export const Code: FC<CodeProps> = ({ children, className }) => {
    return (
        <StyledCode className={className}>
            <pre>{children}</pre>
        </StyledCode>
    );
};
