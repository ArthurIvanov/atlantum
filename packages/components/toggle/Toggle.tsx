import React, { FC } from 'react';
import styled from 'styled-components';
import { InputProps } from '@atlantum/input';
import Label from '@atlantum/label';

export interface ToggleProps extends InputProps {
    checked?: boolean;

    /**
     * Allow apply custom classes to component
     */
    className?: string;
}

const StyledToggle = styled.input<ToggleProps>`
    width: ${(props) => props.theme.spacing.space30};
    height: ${(props) => props.theme.spacing.space16};
    margin: 0;
    position: relative;
    display: block;
    cursor: pointer;
    appearance: none;
    outline: none;
    border-radius: ${(props) => props.theme.spacing.space32};

    &:hover {
        &:before {
            background-color: ${(props) => props.theme.colors.neutral300};
        }
    }

    &:focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary100};
    }

    &:before,
    &:after {
        position: absolute;
        display: block;
        content: '';
        border-radius: ${(props) => props.theme.spacing.space32};
        top: 0;
    }

    &:before {
        width: 100%;
        height: 100%;
        transition: 0.4s;
        background-color: ${(props) => props.theme.colors.neutral300};
    }

    &:after {
        width: ${(props) => props.theme.spacing.space12};
        height: ${(props) => props.theme.spacing.space12};
        transform: translate(2px, 2px);
        transition: 0.4s;
        background-color: ${(props) => props.theme.colors.neutralContentBG};
    }

    &:checked {
        &:after {
            transform: translate(16px, 2px);
        }
        &:before {
            background-color: ${(props) => props.theme.colors.success200};
        }
    }

    ${(props) =>
        props.disabled &&
        `
        cursor: not-allowed;
        &:before {
            background-color: ${props.theme.colors.neutral100};
        }
         &:hover {
            &:before {
                background-color: ${props.theme.colors.neutral100};
            }
    }
        &:after {
            box-shadow: none;
            background-color: ${props.theme.colors.neutral200};
        }
         &:checked {
            &:hover {
                &:before {
                    background-color: ${props.theme.colors.neutral100};
                }
            }
         &:before {
            background-color: ${props.theme.colors.neutral100};
         }
         &:after {
            box-shadow: none;
        }
    }    
    
    `}
`;

const Toggle: FC<ToggleProps> = (props) => {
    return (
        <Label
            htmlFor={props.id}
            input={props.input}
            danger={props.danger}
            disabled={props.disabled}
        >
            <StyledToggle
                checked={props.checked}
                disabled={props.disabled}
                danger={props.danger}
                success={props.success}
                name={props.name}
                type={'checkbox'}
                id={props.id}
                onChange={props.onChange}
                className={props.className}
            />
            <span className="input-label">{props.label}</span>
        </Label>
    );
};

export default Toggle;
