import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';
import { InputProps } from '@atlantum/input';
import Label from '@atlantum/label';

export interface SelectProps extends InputProps {
    checked?: boolean;
    children: ReactNode;
    placeholder?: string;
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

const Select: FC<SelectProps> = (props) => {
    return (
        <Label
            htmlFor={props.id}
            input={props.input}
            danger={props.danger}
            disabled={props.disabled}
        >
            <StyledSelect name={props.name} type={'text'} id={props.id}>
                <option>{props.placeholder}</option>
                <optgroup>{props.children}</optgroup>
            </StyledSelect>
            <span className="input-label">{props.label}</span>
        </Label>
    );
};

export default Select;
