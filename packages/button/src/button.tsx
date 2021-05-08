import styled from 'styled-components';
import React, { FC, ReactNode, Fragment, MouseEventHandler } from 'react';

export type Themed = `danger` | `success` | `warning` | 'info';

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

    /**
     * Allow apply custom classes to component
     */
    className?: string;

    /**
     * Allow apply custom color theming to button
     */
    themed?: Themed;
}

export const StyledButton = styled.button<ButtonProps>`
    outline: none;
    border: none;
    display: inline-block;
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.colors.primary[200]};
    color: ${(props) => props.theme.colors.neutral[500]};
    padding: ${(props) => props.theme.spacing[8]}
        ${(props) => props.theme.spacing[16]};
    font-size: ${(props) => props.theme.typography.fontSize.base};
    font-family: ${(props) => props.theme.typography.family.base};
    line-height: ${(props) => props.theme.typography.lineHeight.base};
    font-weight: ${(props) => props.theme.typography.fontWeight.regular};
    cursor: pointer;

    transition: 0.2s ease;
    &:hover {
        background-color: ${(props) => props.theme.colors.primary[300]};
    }
    &:focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary[100]};
    }

    &:active {
        background-color: ${(props) => props.theme.colors.primary[400]};
    }

    ${(props) =>
        props.leftIcon &&
        `   
        display: inline-flex;
        align-items: center;
        & > * {
            margin-right: ${props.theme.spacing[8]}px;
        }  
    `}

    ${(props) =>
        props.rightIcon &&
        `  
        display: inline-flex;
        align-items: center; 
        & > * {
            margin-left: ${props.theme.spacing[8]}px;
        }
    `}

    

    ${(props) =>
        props.isSecondary &&
        `  
         color: ${props.theme.colors.neutral[400]};
         background-color: ${props.theme.colors.neutral[100]};
         
        &:hover {   
            color: ${props.theme.colors.primary[300]};
            background-color: ${props.theme.colors.neutral[100]};      
        }
         
        
        &:focus {
            color: ${props.theme.colors.neutral[400]};
            background-color: ${props.theme.colors.neutral[100]};
        }
    
        &:active {
            color: ${props.theme.colors.neutral[500]};
            background-color: ${props.theme.colors.neutral[300]};
        }
    `}

    ${(props) =>
        props.disabled &&
        `
         color: ${props.theme.colors.neutral[200]};
         background-color: ${props.theme.colors.neutral[100]};
         cursor: not-allowed;
         &:hover {           
         background-color: ${props.theme.colors.neutral[100]};

    }
    `}
    
    ${(props) =>
        props.themed === 'danger' &&
        `   
        background-color: ${props.theme.colors.danger[200]};
        &:hover {
        background-color: ${props.theme.colors.danger[300]};
    }
        &:focus {
            box-shadow: 0 0 0 2px ${props.theme.colors.danger[100]};
        }
    
        &:active {
            background-color: ${props.theme.colors.danger[400]};
        }
    
    `}

	${(props) =>
        props.themed === 'success' &&
        `   
        background-color: ${props.theme.colors.success[200]};
        &:hover {
        background-color: ${props.theme.colors.success[300]};
    }
        &:focus {
            box-shadow: 0 0 0 2px ${props.theme.colors.success[100]};
        }
    
        &:active {
            background-color: ${props.theme.colors.success[400]};
        }
    
    `}

	${(props) =>
        props.themed === 'warning' &&
        `   
        background-color: ${props.theme.colors.warning[200]};
        &:hover {
        background-color: ${props.theme.colors.warning[300]};
    }
        &:focus {
            box-shadow: 0 0 0 2px ${props.theme.colors.warning[100]};
        }
    
        &:active {
            background-color: ${props.theme.colors.warning[400]};
        }
    
    `}

	${(props) =>
        props.themed === 'info' &&
        `   
        background-color: ${props.theme.colors.info[200]};
        &:hover {
        background-color: ${props.theme.colors.info[300]};
    }
        &:focus {
            box-shadow: 0 0 0 2px ${props.theme.colors.info[100]};
        }
    
        &:active {
            background-color: ${props.theme.colors.info[400]};
        }
    
    `}
`;

export const Button: FC<ButtonProps> = (props) => (
    <StyledButton
        isSecondary={props.isSecondary}
        disabled={props.disabled}
        leftIcon={props.leftIcon}
        rightIcon={props.rightIcon}
        onClick={props.onClick}
        className={props.className}
        themed={props.themed}
    >
        {props.leftIcon && <Fragment>{props.leftIcon}</Fragment>}
        {props.children}
        {props.rightIcon && <Fragment>{props.rightIcon}</Fragment>}
    </StyledButton>
);
