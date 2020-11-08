import * as React from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import { InputProps } from '@atlantum/input';
import Label from '@atlantum/label';

export interface ToggleProps extends InputProps {
    checked?: boolean;
}

const StyledToggle = styled.input<ToggleProps>`
    width: ${(props) => props.theme.spacing.space30};
    height: ${(props) => props.theme.spacing.space16};
    margin: 0;
    position: relative;
    display: block;
    cursor: pointer;

    &:hover {
        &:before {
            background-color: ${(props) => props.theme.colors.neutralBase};
        }
    }

    &:before,
    &:after {
        position: absolute;
        display: block;
        content: '';
        border-radius: ${(props) => props.theme.spacing.space32};
    }

    &:before {
        width: 100%;
        height: 100%;
        transition: 0.4s;
        background-color: ${(props) => props.theme.colors.neutralDark};
    }

    &:after {
        width: ${(props) => props.theme.spacing.space12};
        height: ${(props) => props.theme.spacing.space12};
        transform: translate(2px, 2px);
        transition: 0.4s;
        background-color: ${(props) => props.theme.colors.neutralLighter};
        box-shadow: ${(props) => props.theme.elevation.medium};
    }

    &:checked {
        &:hover {
            &:before {
                background-color: ${(props) => props.theme.colors.successLight};
            }
        }

        &:after {
            transform: translate(16px, 2px);
        }
        &:before {
            background-color: ${(props) => props.theme.colors.successBase};
        }
    }

    ${(props) =>
        props.disabled &&
        `
        cursor: not-allowed;
        &:before {
            background-color: ${props.theme.colors.neutralLight};
        }
         &:hover {
            &:before {
                background-color: ${props.theme.colors.neutralLight};
            }
    }
        &:after {
            box-shadow: none;
        }
         &:checked {
            &:hover {
                &:before {
                    background-color: ${props.theme.colors.neutralLight};
                }
            }
         &:before {
            background-color: ${props.theme.colors.neutralLight};
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
            />
            <span className="input-label">{props.label}</span>
        </Label>
    );
};

export default Toggle;
