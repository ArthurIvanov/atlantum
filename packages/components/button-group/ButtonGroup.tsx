import styled from 'styled-components';
import * as React from 'react';
import { FC, ReactNode } from 'react';

export interface ButtonGroupProps {
    children: ReactNode;
}

const StyledButtonGroup = styled.div<ButtonGroupProps>`
    display: inline-flex;

    & > button:first-child {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
    }

    & > button:last-child {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
    }

    & > button:not(:first-child):not(:last-child) {
        border-radius: 0;
    }

    & > button:not(:last-child) {
        margin-right: 2px;
    }
`;

const ButtonGroup: FC<ButtonGroupProps> = ({ children }) => (
    <StyledButtonGroup>{children}</StyledButtonGroup>
);

export default ButtonGroup;