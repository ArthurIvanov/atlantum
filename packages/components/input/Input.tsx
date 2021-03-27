import styled from 'styled-components';
import React, { FC, ChangeEventHandler } from 'react';
import InputTypes from '@atlantum/types';

import Label from '@atlantum/label';

export interface InputProps {
    disabled?: boolean;
    danger?: boolean;
    success?: boolean;
    loading?: boolean;
    placeholder?: string;
    name: string;
    type: InputTypes;
    value?: string;
    label?: string;
    alert?: string;

    defaultValue?: string;
    id?: string;
    input?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;

    /**
     * Allow apply custom classes to component
     */
    className?: string;
}

const StyledInput = styled.input<InputProps>`
    box-sizing: border-box;
    display: block;
    width: 100%;
    margin: 0;
    border-radius: ${(props) => props.theme.borderRadius};
    outline: 0;

    border: ${(props) => props.theme.spacing.space1} solid
        ${(props) => props.theme.colors.neutral300};

    color: ${(props) => props.theme.colors.neutral400};
    background-color: ${(props) => props.theme.colors.neutralContentBG};
    padding: ${(props) => props.theme.spacing.space7};
    font-size: ${(props) => props.theme.typography.fontSize.base};
    font-family: ${(props) => props.theme.typography.family.base};
    font-weight: ${(props) => props.theme.typography.fontWeight.regular};
    line-height: ${(props) => props.theme.typography.lineHeight.base};

    &::placeholder {
        color: ${(props) => props.theme.colors.neutral300};
        font-family: ${(props) => props.theme.typography.family.base};
        font-size: ${(props) => props.theme.typography.fontSize.base};
        font-weight: ${(props) => props.theme.typography.fontWeight.regular};
    }

    &:hover {
        border-color: ${(props) => props.theme.colors.primary200};
    }
    &:focus {
        border-color: ${(props) => props.theme.colors.primary300};
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary100};
    }

    transition: ${(props) => props.theme.animation.base};

    ${(props) =>
        props.disabled &&
        `
        &::placeholder {
        color: ${props.theme.colors.neutral200};
        }
         color: ${props.theme.colors.neutral200};
         background-color: ${props.theme.colors.neutral100};
         border-color: ${props.theme.colors.neutral100};
         cursor: not-allowed;
         &:hover {    
            background-color: ${props.theme.colors.neutral100};
            border-color: ${props.theme.colors.neutral100};
            box-shadow: none;
    }
    `}

    ${(props) =>
        props.danger &&
        ` 
        border-color: ${props.theme.colors.danger300};
        &:focus {
        border-color: ${props.theme.colors.danger300};
        }
         &:hover {
            border-color: ${props.theme.colors.danger200};         
    }
    `}
    
    ${(props) =>
        props.success &&
        `       
         border-color: ${props.theme.colors.success300};
         &:hover {
            border-color: ${props.theme.colors.success300};         
    }
        &:focus {
        border-color: ${props.theme.colors.success200};
        }
    `}
`;

const Input: FC<InputProps> = (props) => {
    return (
        <Label
            htmlFor={props.id}
            input={props.input}
            danger={props.danger}
            success={props.success}
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
            {props.alert && <span className="input-alert">{props.alert}</span>}
        </Label>
    );
};

export default Input;
