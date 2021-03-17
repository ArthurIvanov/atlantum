import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';

import { InputProps } from '@atlantum/input';
import Label from '@atlantum/label';

export interface DatepickerProps extends InputProps {
    checked?: boolean;
    children?: ReactNode;
}

const StyledDatepicker = styled.input<DatepickerProps>`
    transition: 0.2s ease;
`;

const Datepicker: FC<DatepickerProps> = (props) => {
    return (
        <Label
            htmlFor={props.id}
            input={props.input}
            danger={props.danger}
            disabled={props.disabled}
        >
            <StyledDatepicker
                checked={props.checked}
                disabled={props.disabled}
                danger={props.danger}
                success={props.success}
                name={props.name}
                type={'checkbox'}
                onChange={props.onChange}
            />

            <span className="input-label">{props.label}</span>
        </Label>
    );
};

export default Datepicker;
