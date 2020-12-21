import styled from 'styled-components';
import * as React from 'react';
import { FC, ReactNode } from 'react';

export interface ButtonProps {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    isSecondary?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;

    onClick?: React.MouseEventHandler;
}

const StyledButton = styled.button<ButtonProps>`
    border: none;
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.colors.primaryBase};
    color: ${(props) => props.theme.colors.textInverted};
    padding: ${(props) => props.theme.spacing.space8}
        ${(props) => props.theme.spacing.space24};
    font-size: ${(props) => props.theme.typography.fontSize.base};
    font-family: ${(props) => props.theme.typography.family.base};
    line-height: ${(props) => props.theme.typography.lineHeight.base};
    font-weight: ${(props) => props.theme.typography.fontWeight.regular};
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
        props.isSecondary &&
        `  
         color: ${props.theme.colors.text};
         background-color: ${props.theme.colors.neutralLight};
         &:hover {   
         background-color: ${props.theme.colors.neutralLight};      
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
        props.isDisabled &&
        `
         color: ${props.theme.colors.neutralBase};
         background-color: ${props.theme.colors.neutralLight};
         border-color: ${props.theme.colors.neutralDark};
         cursor: not-allowed;
         &:hover {
            
            
         background-color: ${props.theme.colors.neutralLight};
            box-shadow: none;
    }
    `}
`;

const Button: FC<ButtonProps> = (props) => (
    <StyledButton isSecondary={props.isSecondary} isDisabled={props.isDisabled}>
        {props.children}
    </StyledButton>
);

export default Button;
