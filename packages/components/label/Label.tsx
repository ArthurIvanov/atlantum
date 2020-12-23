import * as React from 'react';
import styled from 'styled-components';
import { FC, ReactNode } from 'react';

export interface LabelProps {
    children: ReactNode;
    htmlFor?: string;
    className?: string;
    input?: boolean;
    danger?: boolean;
    disabled?: boolean;
}

const StyledLabel = styled.label<LabelProps>`
    display: flex;
    align-items: center;
    width: 100%;

    span.input-label {
        color: ${(props) => props.theme.colors.text};
        margin-left: ${(props) => props.theme.spacing.space8};
    }

    span {
        display: block;
        font-size: ${(props) => props.theme.typography.fontSize.label};
        font-weight: ${(props) => props.theme.typography.fontWeight.regular};
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
                color: ${props.theme.colors.text};
                font-size: ${props.theme.typography.fontSize.subLabel};
                line-height: ${props.theme.typography.lineHeight.subLabel};
                margin-top: ${props.theme.spacing.space4};
                }
            span.input-label {
                color: ${props.theme.colors.text};
                margin-bottom: ${props.theme.spacing.space4};
                margin-left: 0;
            }
 
            
    `};

    ${(props) =>
        props.danger &&
        `      
            span.input-alert {
            color: ${props.theme.colors.dangerBase};
            }
               
    `};

    ${(props) =>
        props.disabled &&
        `      
            span.input-label {
            color: ${props.theme.colors.neutralBase};
            }
            
    `};
`;

const Label: FC<LabelProps> = (props) => {
    return (
        <StyledLabel
            htmlFor={props.htmlFor}
            className={props.className}
            input={props.input}
            danger={props.danger}
            disabled={props.disabled}
        >
            {props.children}
        </StyledLabel>
    );
};

export default Label;
