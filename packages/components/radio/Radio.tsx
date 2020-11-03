import styled from 'styled-components';
import * as React from 'react';
import { FC } from 'react';
import { InputProps } from '@morph-design-system/input';

export interface RadioProps extends InputProps {
    label?: string;
    checked?: boolean;
}

const StyledRadio = styled.input<RadioProps>`
    appearance: none;
    position: relative;
    cursor: pointer;
    display: block;
    width: ${(props) => props.theme.spacing.space16};
    height: ${(props) => props.theme.spacing.space16};
    border-radius: 50%;
    border: ${(props) => props.theme.spacing.space2} solid
        ${(props) => props.theme.colors.primaryBase};

    transition: 0.2s ease;

    &:hover {
        color: ${(props) => props.theme.colors.textInverted};
        border-color: ${(props) => props.theme.colors.primaryLight};
        box-shadow: ${(props) => props.theme.elevation.slight};
    }

    &:checked,
    &:focus {
        outline: none;
        background-color: ${(props) => props.theme.colors.primaryBase};
    }

    &:checked::after {
        content: '';
        display: block;
        background-color: ${(props) => props.theme.colors.textInverted};
        border-radius: 50%;
        position: absolute;
        width: 4px;
        height: 4px;
        top: 4px;
        left: 4px;
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
        &:checked,
    &:focus {
        background-color: ${props.theme.colors.neutralDark};
    }
    &:checked::after {
        background-color: ${props.theme.colors.textInverted};
    }
    \`}
    
    `}

    ${(props) =>
        props.danger &&
        `
         border-color: ${props.theme.colors.dangerBase};
         &:hover {
            border-color: ${props.theme.colors.dangerLight};          
    }
    &:checked,
    &:focus {
        outline: none;
        background-color: ${props.theme.colors.dangerBase};
    }
    
    &:checked::after {
        background-color: ${props.theme.colors.textInverted};
    }
    `}
    
     ${(props) =>
        props.success &&
        `
         border-color: ${props.theme.colors.successBase};
         &:hover {
            border-color: ${props.theme.colors.successLight};
        }
        &:checked,
        &:focus {
            outline: none;
            background-color: ${props.theme.colors.successBase};
        }
    
        &:checked::after {
            background-color: ${props.theme.colors.textInverted};
        }
        `}
`;

const Radio: FC<RadioProps> = (props) => {
    return (
        <StyledRadio
            checked={props.checked}
            disabled={props.disabled}
            danger={props.danger}
            success={props.success}
            name={props.name}
            type={'radio'}
        />
    );
};

export default Radio;
