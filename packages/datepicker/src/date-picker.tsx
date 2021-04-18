import styled from 'styled-components';
import React, { FC } from 'react';

import { InputProps } from '@atlantum/text-input';
import { Label } from '@atlantum/label';

const StyledDatepicker = styled.input<InputProps>`
    box-sizing: border-box;
    display: block;
    width: 100%;
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
`;

export const Datepicker: FC<InputProps> = (props) => {
    return (
        <Label
            htmlFor={props.id}
            input={props.input}
            danger={props.danger}
            success={props.success}
            disabled={props.disabled}
        >
            <span className="input-label">{props.label}</span>
            <StyledDatepicker
                className={props.className}
                type={'date'}
                name={props.name}
                onChange={props.onChange}
                disabled={props.disabled}
                danger={props.danger}
                success={props.success}
                placeholder={props.placeholder}
                value={props.value}
                defaultValue={props.defaultValue}
                input={props.input}
            />
            {props.alert && <span className="input-alert">{props.alert}</span>}
        </Label>
    );
};
