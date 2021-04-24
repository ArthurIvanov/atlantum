import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';
import { InputProps } from '../../text-input';
import { Label } from '@atlantum/label';

export interface SelectProps extends InputProps {
    checked?: boolean;
    children: ReactNode;
    placeholder?: string;

    /**
     * Allow apply custom classes to component.
     */
    className?: string;
}

const StyledSelect = styled.select<SelectProps>`
    appearance: none;
    outline: none;
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

export const Select: FC<SelectProps> = ({
    id,
    input,
    danger,
    disabled,
    name,
    placeholder,
    children,
    label,
    className,
    alert,
}) => {
    return (
        <Label
            htmlFor={id}
            input={input}
            danger={danger}
            disabled={disabled}
            className={className}
        >
            <span className="input-label">{label}</span>
            <StyledSelect name={name} type={'text'} id={id}>
                <option>{placeholder}</option>
                <optgroup>{children}</optgroup>
            </StyledSelect>
            {alert && <span className="input-alert">{alert}</span>}
        </Label>
    );
};
