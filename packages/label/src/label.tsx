import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

type FontWeight = 'regular' | 'semiBold';

export interface LabelProps {
    children: ReactNode;
    htmlFor?: string;
    input?: boolean;
    danger?: boolean;
    success?: boolean;
    disabled?: boolean;
    fontWeight?: FontWeight;

    /**
     * Allow apply custom classes to component
     */
    className?: string;
}

const StyledLabel = styled.label<LabelProps>`
    display: flex;
    align-items: center;
    width: 100%;

    span.input-label {
        color: ${(props) => props.theme.colors.neutral[400]};
        margin-left: ${(props) => props.theme.spacing[8]};
        font-weight: ${(props) => props.theme.typography.fontWeight.regular};
    }

    span {
        display: block;
        font-size: ${(props) => props.theme.typography.fontSize.label};
        line-height: ${(props) => props.theme.typography.lineHeight.label};
        font-family: ${(props) => props.theme.typography.family.base};

        margin: 0;
    }

    ${(props) =>
        props.input &&
        `      
            flex-direction: column;
            align-items: flex-start;
            span.input-alert {
                color: ${props.theme.colors.neutral[400]};
                font-size: ${props.theme.typography.fontSize.subLabel};
                line-height: ${props.theme.typography.lineHeight.subLabel};
                font-weight: ${props.theme.typography.fontWeight.regular};
                margin-top: ${props.theme.spacing[4]};
                }
            span.input-label {
                color: ${props.theme.colors.neutral[400]};
                margin-bottom: ${props.theme.spacing[4]};
                font-weight: ${props.theme.typography.fontWeight.semiBold};
                margin-left: 0;
            }
 
            
    `};

    ${(props) =>
        props.danger &&
        `      
            span.input-alert {
            color: ${props.theme.colors.danger[300]};
            }
               
    `};

    ${(props) =>
        props.success &&
        `      
            span.input-alert {
            color: ${props.theme.colors.success[300]};
            }
               
    `};

    ${(props) =>
        props.disabled &&
        `      
            span.input-label {
            color: ${props.theme.colors.neutral[200]};
            }
            
    `};

    ${(props) =>
        props.fontWeight === 'regular' &&
        `      
            span.input-label {
            font-weight: ${props.theme.typography.fontWeight.regular};
            color: red;
            }
       
    `};
`;

export const Label: FC<LabelProps> = (props, { fontWeight }) => {
    return (
        <StyledLabel
            htmlFor={props.htmlFor}
            className={props.className}
            input={props.input}
            danger={props.danger}
            success={props.success}
            disabled={props.disabled}
            fontWeight={fontWeight}
        >
            {props.children}
        </StyledLabel>
    );
};
