import * as React from 'react';
import styled from 'styled-components';
import { FC, ReactNode } from 'react';

export interface LabelProps {
    children: ReactNode;
    htmlFor?: string;
    className?: string;
    input?: boolean;
    danger?: boolean;
}

const StyledLabel = styled.label<LabelProps>`
    align-items: center;
    span {
        color: ${(props) => props.theme.colors.text};
        margin: 0;
        font-family: ${(props) => props.theme.typography.family.base};
        font-size: ${(props) => props.theme.typography.size[200]};
        font-weight: ${(props) => props.theme.typography.weight['500']};
        line-height: ${(props) => props.theme.typography.lineHeight[20]};
        margin-bottom: ${(props) => props.theme.spacing.space4};
    }
    ${(props) =>
        props.input &&
        `      
            flex-direction: column;
            align-items: flex-end;
    `};

    ${(props) =>
        props.danger &&
        `      
            span {
            color: ${props.theme.colors.dangerBase};
            }
            
            
    `};
`;

const Label: FC<LabelProps> = (props) => {
    return (
        <StyledLabel
            htmlFor={props.htmlFor}
            className={props.className}
            input={props.input}
        >
            {props.children}
        </StyledLabel>
    );
};

export default Label;
