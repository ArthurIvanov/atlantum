import styled from 'styled-components';
import React, { FC, ReactNode, Fragment, MouseEventHandler } from 'react';

export interface ButtonProps {
    /**
     * If `true`, the button will have icon before label text.
     */
    leftIcon?: ReactNode;

    /**
     * You need to pass Icon component to make it work
     * Example: `leftIcon={<Icon name={'git-commit'} size={20} />}`
     */
    rightIcon?: ReactNode;

    /**
     * You need to pass Icon component to make it work
     * Example: `rightIcon={<Icon name={'git-commit'} size={20} />}`
     */
    isSecondary?: boolean;

    /**
     * If `true`, the button will be disabled.
     *
     */
    disabled?: boolean;

    /**
     * Mandatory field, you need to enter a button label.
     */
    children: ReactNode;

    /**
     * HTML type for button.
     */
    type?: 'button' | 'submit' | 'reset';

    /**
     * this prop are in development...
     */
    isLoading?: boolean;

    /**
     * Access to React event handler.
     */
    onClick?: MouseEventHandler;
}

export const StyledButton = styled.button<ButtonProps>`
    outline: none;
    border: none;
    display: inline-block;
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.colors.primary200};
    color: ${(props) => props.theme.colors.neutralContentBG};
    padding: ${(props) => props.theme.spacing.space8}
        ${(props) => props.theme.spacing.space16};
    font-size: ${(props) => props.theme.typography.fontSize.base};
    font-family: ${(props) => props.theme.typography.family.base};
    line-height: ${(props) => props.theme.typography.lineHeight.base};
    font-weight: ${(props) => props.theme.typography.fontWeight.regular};

    ${(props) =>
        props.leftIcon &&
        `   
        display: inline-flex;
        align-items: center;
        & > * {
            margin-right: 8px;
        }  
    `}

    ${(props) =>
        props.rightIcon &&
        `  
        display: inline-flex;
        align-items: center; 
        & > * {
            margin-left: 8px;
        }
    `}

    cursor: pointer;

    transition: 0.2s ease;
    &:hover {
        background-color: ${(props) => props.theme.colors.primary300};
    }
    &:focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary100};
    }

    &:active {
        background-color: ${(props) => props.theme.colors.primary400};
    }

    ${(props) =>
        props.isSecondary &&
        `  
         color: ${props.theme.colors.neutral400};
         background-color: ${props.theme.colors.neutral100};
         
        &:hover {   
            color: ${props.theme.colors.primary300};
            background-color: ${props.theme.colors.neutral100};      
        }
         
        
        &:focus {
            color: ${props.theme.colors.neutral400};
            background-color: ${props.theme.colors.neutralLight};
        }
    
        &:active {
            color: ${props.theme.colors.neutralContentBG};
            background-color: ${props.theme.colors.neutral300};
        }
    `}

    ${(props) =>
        props.disabled &&
        `
         color: ${props.theme.colors.neutral200};
         background-color: ${props.theme.colors.neutral100};
         cursor: not-allowed;
         &:hover {           
         background-color: ${props.theme.colors.neutral100};

    }
    `}
`;

const Button: FC<ButtonProps> = (props) => (
    <StyledButton
        isSecondary={props.isSecondary}
        disabled={props.disabled}
        leftIcon={props.leftIcon}
        rightIcon={props.rightIcon}
        onClick={props.onClick}
    >
        {props.leftIcon && <Fragment>{props.leftIcon}</Fragment>}
        {props.children}
        {props.rightIcon && <Fragment>{props.rightIcon}</Fragment>}
    </StyledButton>
);

export default Button;
