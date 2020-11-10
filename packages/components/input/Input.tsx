import styled from 'styled-components';
import * as React from 'react';
import { FC, ChangeEventHandler } from 'react';
import InputTypes from '@atlantum/types';

import Label from '@atlantum/label';

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
    label?: string;
    alert?: 'string';

    defaultValue?: string;
    id?: string;
    input?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const StyledInput = styled.input<InputProps>`
    display: block;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    border-top-left-radius: ${(props) => props.theme.borderRadius};
    border-top-right-radius: ${(props) => props.theme.borderRadius};
    border: ${(props) => props.theme.spacing.space1} solid
        ${(props) => props.theme.colors.neutralDark};
    border-bottom: ${(props) => props.theme.spacing.space2} solid
        ${(props) => props.theme.colors.neutralDark};

    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.neutralLighter};
    padding: ${(props) => props.theme.spacing.space8};
    font-size: ${(props) => props.theme.typography.fontSize.base};
    font-family: ${(props) => props.theme.typography.family.base};
    font-weight: ${(props) => props.theme.typography.fontWeight.regular};
    line-height: ${(props) => props.theme.typography.lineHeight.base};

    &::placeholder {
        color: ${(props) => props.theme.colors.neutralDark};
        font-family: ${(props) => props.theme.typography.family.base};
        font-size: ${(props) => props.theme.typography.fontSize.base};
        font-weight: ${(props) => props.theme.typography.fontWeight.regular};
    }

    &:hover {
        border-color: ${(props) => props.theme.colors.primaryLight};
        box-shadow: ${(props) => props.theme.elevation.slight};
    }
    &:focus {
        outline: 0;
        border-color: ${(props) => props.theme.colors.primaryDark};
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
         color: ${props.theme.colors.neutralBase};
         background-color: ${props.theme.colors.neutralLight};
         border-color: ${props.theme.colors.neutralLight};
         cursor: not-allowed;
         &:hover {    
            background-color: ${props.theme.colors.neutralLight};
            border-color: ${props.theme.colors.neutralLight};
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

const Input: FC<InputProps> = (props) => {
    return (
        <Label
            htmlFor={props.id}
            input={props.input}
            danger={props.danger}
            disabled={props.disabled}
        >
            <span className="input-label">{props.label}</span>
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
            <span className="input-alert">{props.alert}</span>
        </Label>
    );
};

export default Input;
