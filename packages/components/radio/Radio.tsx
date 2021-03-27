import styled from 'styled-components';
import React, { FC } from 'react';
import { InputProps } from '@atlantum/input';

import Label from '@atlantum/label';

export interface RadioProps extends InputProps {
    checked?: boolean;

    /**
     * Allow apply custom classes to component
     */
    className?: string;
}

const StyledRadio = styled.input<RadioProps>`
    outline: none;
    appearance: none;
    position: relative;
    cursor: pointer;
    display: block;
    margin: 0;
    padding: 0;
    width: ${(props) => props.theme.spacing.space16};
    height: ${(props) => props.theme.spacing.space16};
    border-radius: 50%;
    border: ${(props) => props.theme.spacing.space1} solid
        ${(props) => props.theme.colors.neutral300};

    transition: 0.2s ease;

    &:hover {
        color: ${(props) => props.theme.colors.neutral400};
        border-color: ${(props) => props.theme.colors.neutral400};
        box-shadow: ${(props) => props.theme.elevation.slight};
    }

    &:checked {
        background-color: ${(props) => props.theme.colors.primary300};
    }

    &:focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary100};
    }

    &:checked::after {
        content: '';
        display: block;
        background-color: ${(props) => props.theme.colors.neutralContentBG};
        border-radius: 50%;
        position: absolute;
        width: 4px;
        height: 4px;
        top: 5px;
        left: 5px;
    }

    ${(props) =>
        props.disabled &&
        `
         border-color: ${props.theme.colors.neutral100};
         cursor: not-allowed;
         &:hover {
            border-color: ${props.theme.colors.neutral100}; 
            box-shadow: none;
        }
        &:checked::after{
            background-color: ${props.theme.colors.neutral200};
        }
        &:checked,
        
        &:focus {
            background-color: ${props.theme.colors.neutralGlobalBG};
        }
    

    
    `}

    ${(props) =>
        props.danger &&
        `
         border-color: ${props.theme.colors.danger300};
         &:hover {
            border-color: ${props.theme.colors.danger300};          
    }
    &:checked,
    &:focus {
        outline: none;
        background-color: ${props.theme.colors.danger300};
    }
    
    &:checked::after {
        background-color: ${props.theme.colors.neutralContentBG};
    }
    `}
    
     ${(props) =>
        props.success &&
        `
         border-color: ${props.theme.colors.success300};
         &:hover {
            border-color: ${props.theme.colors.success300};
        }
        &:checked,
        &:focus {

            outline: none;
            background-color: ${props.theme.colors.success300};
        }
    
        &:checked::after {
            background-color: ${props.theme.colors.neutralContentBG};
        }
        `}
`;

const Radio: FC<RadioProps> = (props, { fontWeight }) => {
    return (
        <Label
            htmlFor={props.id}
            input={props.input}
            danger={props.danger}
            disabled={props.disabled}
            fontWeight={fontWeight}
        >
            <StyledRadio
                checked={props.checked}
                disabled={props.disabled}
                danger={props.danger}
                success={props.success}
                name={props.name}
                type={'radio'}
                id={props.id}
                onChange={props.onChange}
                className={props.className}
            />
            <span className="input-label">{props.label}</span>
        </Label>
    );
};

export default Radio;
