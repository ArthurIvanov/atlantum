import styled from 'styled-components';
import * as React from 'react';
import { FC } from 'react';

import { InputProps } from '@atlantum/input';
import Label from '@atlantum/label';

export interface CheckboxProps extends InputProps {
    checked?: boolean;
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

    &:checked::after {
        content: '';
        display: block;
        background-color: ${(props) => props.theme.colors.primaryBase};
        border-radius: 1px;
        position: absolute;
        width: 8px;
        height: 8px;
        top: 2px;
        left: 2px;
    }

    ${(props) =>
        props.disabled &&
        `
         border-color: ${props.theme.colors.neutralDark};
         cursor: not-allowed;
         &:hover {
            border-color: ${props.theme.colors.neutralDark}; 
            box-shadow: none;
    }
    
    &:checked::after {
        background-color: ${props.theme.colors.neutralDark};
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
