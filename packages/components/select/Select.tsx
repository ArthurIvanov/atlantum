import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';
import { InputProps } from '@atlantum/input';
import Label from '@atlantum/label';

export interface SelectProps extends InputProps {
    checked?: boolean;
    children: ReactNode;
    placeholder?: string;

    /**
     * Allow apply custom classes to component
     */
    className?: string;
}

const StyledSelect = styled.select<SelectProps>`
    appearance: none;
    outline: none;
    position: relative;
    display: block;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    border-radius: ${(props) => props.theme.borderRadius};
    border: ${(props) => props.theme.spacing.space1} solid
        ${(props) => props.theme.colors.neutralDark};

    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.neutralLighter};
    padding: ${(props) => props.theme.spacing.space8};
    font-size: ${(props) => props.theme.typography.fontSize.base};
    font-family: ${(props) => props.theme.typography.family.base};
    font-weight: ${(props) => props.theme.typography.fontWeight.regular};
    line-height: ${(props) => props.theme.typography.lineHeight.base};
`;

const Select: FC<SelectProps> = ({
    id,
    input,
    danger,
    disabled,
    name,
    placeholder,
    children,
    label,
    className,
}) => {
    return (
        <Label
            htmlFor={id}
            input={input}
            danger={danger}
            disabled={disabled}
            className={className}
        >
            <StyledSelect name={name} type={'text'} id={id}>
                <option>{placeholder}</option>
                <optgroup>{children}</optgroup>
            </StyledSelect>
            <span className="input-label">{label}</span>
        </Label>
    );
};

export default Select;
