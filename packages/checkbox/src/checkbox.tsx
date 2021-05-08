import styled from 'styled-components';
import React, { FC } from 'react';

import { InputProps } from '../../text-input';
import { Label } from '@atlantum/label';

export interface CheckboxProps extends InputProps {
    /**
     * if `true` change checkbox on check
     * */
    checked?: boolean;

    /**
     * Allow to add classes to component
     * */
    className?: string;
}

const StyledCheckbox = styled.input<CheckboxProps>`
    appearance: none;
    position: relative;
    cursor: pointer;
    display: block;
    margin: 0;
    padding: 0;
    width: ${(props) => props.theme.spacing[16]}px;
    height: ${(props) => props.theme.spacing[16]}px;
    border-radius: ${(props) => props.theme.spacing[2]}px;
    border: ${(props) => props.theme.spacing[2]}px solid
        ${(props) => props.theme.colors.neutral[400]};

    transition: 0.2s ease;

    &:hover {
        color: ${(props) => props.theme.colors.neutral[400]};
        border-color: ${(props) => props.theme.colors.primary[100]};
    }

    &:checked {
        border-color: ${(props) => props.theme.colors.primary[200]};
        background-color: ${(props) => props.theme.colors.primary[200]};
    }

    &:checked::after {
        content: '';
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
        display: block;
        border-radius: ${(props) => props.theme.spacing[2]}px;
        position: absolute;
        width: ${(props) => props.theme.spacing[16]}px;
        height: ${(props) => props.theme.spacing[16]}px;
        color: ${(props) => props.theme.colors.neutral[100]};
        top: -2px;
        left: -2px;
    }

    ${(props) =>
        props.disabled &&
        `
         border-color: ${props.theme.colors.neutral[100]};
         cursor: not-allowed;
         &:hover {
            border-color: ${props.theme.colors.neutral[100]};
            box-shadow: none;
    }
    
    &:checked {
        background-color: ${props.theme.colors.neutral[500]};       
        border-color: ${props.theme.colors.neutral[100]};
    }
    `}

    ${(props) =>
        props.danger &&
        `
         border-color: ${props.theme.colors.danger[300]};
         &:hover {
            border-color: ${props.theme.colors.danger[100]}; 
         
    }
    
    &:checked::after {
        background-color: ${props.theme.colors.danger[300]};
    }
    `}
    
     ${(props) =>
        props.success &&
        `
         border-color: ${props.theme.colors.success[300]};
         &:hover {
            border-color: ${props.theme.colors.success[100]}; 
         
    }
    
    &:checked::after {
        background-color: ${props.theme.colors.success[300]};
    }
    `}
`;

export const Checkbox: FC<CheckboxProps> = (props) => {
    return (
        <Label
            htmlFor={props.id}
            input={props.input}
            danger={props.danger}
            disabled={props.disabled}
        >
            <StyledCheckbox
                className={props.className}
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
