import styled from 'styled-components';
import * as React from 'react';
import { FC, ReactNode } from 'react';

export interface ButtonProps {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    secondary?: boolean;
    disabled?: boolean;
    loading?: boolean;
    onClick?: React.MouseEventHandler;
}

const StyledButton = styled.button<ButtonProps>`
    border: none;
    background-color: ${(props) => props.theme.colors.primaryBase};
    color: ${(props) => props.theme.colors.textInverted};
    padding: ${(props) => props.theme.spacing.space8}
        ${(props) => props.theme.spacing.space24};
    font-size: ${(props) => props.theme.typography.size[300]};
    line-height: ${(props) => props.theme.typography.lineHeight[24]};
    font-weight: 500;
    cursor: pointer;
    transition: 0.2s ease;
    &:hover {
        background-color: ${(props) => props.theme.colors.primaryLight};

        box-shadow: ${(props) => props.theme.elevation.slight};
    }
    &:focus {
        outline: none;
        background-color: ${(props) => props.theme.colors.primaryDark};
    }

    &:active {
        background-color: ${(props) => props.theme.colors.primaryDark};
    }

    ${(props) =>
        props.secondary &&
        `  
         color: ${props.theme.colors.text};
         background-color: ${props.theme.colors.neutralLighter};
         &:hover {   
         background-color: ${props.theme.colors.neutralLighter};      
    }
    &:focus {
        outline: none;
        color: ${props.theme.colors.primaryBase};
        background-color: ${props.theme.colors.neutralLight};
    }

    &:active {
        color: ${props.theme.colors.primaryBase};
        background-color: ${props.theme.colors.neutralLight};
    }
             `}

    ${(props) =>
        props.disabled &&
        `
         color: ${props.theme.colors.neutralBase};
         background-color: ${props.theme.colors.neutralLighter};
         border-color: ${props.theme.colors.neutralDark};
         cursor: not-allowed;
         &:hover {
            
            
         background-color: ${props.theme.colors.neutralLighter};
            box-shadow: none;
    }
    `}
`;

const Button: FC<ButtonProps> = (props) => (
    <StyledButton secondary={props.secondary} disabled={props.disabled}>
        {props.children}
    </StyledButton>
);

export default Button;