import styled from 'styled-components';
import * as React from 'react';
import { FC, ChangeEventHandler } from 'react';
import InputTypes from '@atlantum/types';

export interface InputProps {
    className?: string;
    disabled?: boolean;
    danger?: boolean;
    success?: boolean;
    loading?: boolean;
    placeholder?: string;
    name: string;
    type: InputTypes;
    value?: string;
    defaultValue?: string;
    id?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const StyledInput = styled.input<InputProps>`
    width: 100%;
    border-top-left-radius: ${(props) => props.theme.borderRadius};
    border-top-right-radius: ${(props) => props.theme.borderRadius};
    border: ${(props) => props.theme.spacing.space1} solid
        ${(props) => props.theme.colors.neutralDark};
    border-bottom: ${(props) => props.theme.spacing.space2} solid
        ${(props) => props.theme.colors.neutralDark};

    color: ${(props) => props.theme.colors.text};
    padding: ${(props) => props.theme.spacing.space8};
    font-size: ${(props) => props.theme.typography.size[300]};
    line-height: ${(props) => props.theme.typography.lineHeight[24]};

    &::placeholder {
        color: ${(props) => props.theme.colors.neutralDark};
    }

    &:hover {
        border-color: ${(props) => props.theme.colors.primaryLight};
        box-shadow: ${(props) => props.theme.elevation.slight};
    }
    &:focus {
        outline: 0;
        border-color: ${(props) => props.theme.colors.primaryLight};
        border-bottom-color: ${(props) => props.theme.colors.primaryDark};
        box-shadow: ${(props) => props.theme.elevation.slight};
    }

    transition: ${(props) => props.theme.animation.base};

    ${(props) =>
        props.disabled &&
        `
        &::placeholder {
        color: ${props.theme.colors.neutralDark};
        }
         color: ${props.theme.colors.neutralDark};
         background-color: ${props.theme.colors.neutralLighter};
         border-color: ${props.theme.colors.neutralBase};
         cursor: not-allowed;
         &:hover {    
            background-color: ${props.theme.colors.neutralLighter};
            border-color: ${props.theme.colors.neutralBase};
            box-shadow: none;
    }
    `}

    ${(props) =>
        props.danger &&
        ` 
        border-color: ${props.theme.colors.dangerBase};
        &:focus {
        border-color: ${props.theme.colors.dangerDark};
        }
         &:hover {
            border-color: ${props.theme.colors.dangerLight};         
    }
    `}
    
    ${(props) =>
        props.success &&
        `       
         border-color: ${props.theme.colors.successBase};
         &:hover {
            border-color: ${props.theme.colors.successLight};         
    }
        &:focus {
        border-color: ${props.theme.colors.successDark};
        }
    `}
`;

const Input: FC<InputProps> = (props) => (
    <StyledInput
        className={props.className}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        disabled={props.disabled}
        danger={props.danger}
        success={props.success}
        placeholder={props.placeholder}
        value={props.value}
        defaultValue={props.defaultValue}
    />
);

export default Input;
