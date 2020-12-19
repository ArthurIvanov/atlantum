import styled from 'styled-components';
import * as React from 'react';
import { FC, ReactNode } from 'react';

import { InputProps } from '@atlantum/input';
import Label from '@atlantum/label';

export interface CheckboxProps extends InputProps {
    checked?: boolean;
    children?: ReactNode;
}

const StyledCheckbox = styled.input<CheckboxProps>`
    appearance: none;
    position: relative;
    cursor: pointer;
    display: block;
    margin: 0;
    padding: 0;
    width: ${(props) => props.theme.spacing.space16};
    height: ${(props) => props.theme.spacing.space16};
    border-radius: ${(props) => props.theme.spacing.space2};
    border: ${(props) => props.theme.spacing.space2} solid
        ${(props) => props.theme.colors.primaryBase};

    transition: 0.2s ease;

    &:hover {
        color: ${(props) => props.theme.colors.textInverted};
        border-color: ${(props) => props.theme.colors.primaryLight};
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.24);
    }

    &:checked,
    &:focus {
        outline: none;
    }

    &:checked {
        background-color: ${(props) => props.theme.colors.primaryBase};
    }

    &:checked::after {
        content: '';
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
        display: block;
        border-radius: ${(props) => props.theme.spacing.space2};
        position: absolute;
        width: ${(props) => props.theme.spacing.space16};
        height: ${(props) => props.theme.spacing.space16};
        top: -2px;
        left: -2px;
    }

    ${(props) =>
        props.disabled &&
        `
         border-color: ${props.theme.colors.neutralBase};
         cursor: not-allowed;
         &:hover {
            border-color: ${props.theme.colors.neutralBase}; 
            box-shadow: none;
    }
    
    &:checked {
        background-color: ${props.theme.colors.neutralBase};
    }
    `}

    ${(props) =>
        props.danger &&
        `
         border-color: ${props.theme.colors.dangerBase};
         &:hover {
            border-color: ${props.theme.colors.dangerLight}; 
         
    }
    
    &:checked::after {
        background-color: ${props.theme.colors.dangerDark};
    }
    `}
    
     ${(props) =>
        props.success &&
        `
         border-color: ${props.theme.colors.successBase};
         &:hover {
            border-color: ${props.theme.colors.successLight}; 
         
    }
    
    &:checked::after {
        background-color: ${props.theme.colors.successDark};
    }
    `}
`;

const Checkbox: FC<CheckboxProps> = (props) => {
    return (
        <Label
            htmlFor={props.id}
            input={props.input}
            danger={props.danger}
            disabled={props.disabled}
        >
            <StyledCheckbox
                checked={props.checked}
                disabled={props.disabled}
                danger={props.danger}
                success={props.success}
                name={props.name}
                type={'checkbox'}
                onChange={props.onChange}
            />

            <span className="input-label">{props.label}</span>
        </Label>
    );
};

export default Checkbox;
