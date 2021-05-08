import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';

export interface ButtonGroupProps {
    /**
     * Mandatory field, you need to enter a button label.
     */
    children: ReactNode;
}

const StyledButtonGroup = styled.div<ButtonGroupProps>`
    display: inline-flex;
    button {
        padding: ${(props) => props.theme.spacing[8]};
    }

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

export const ButtonGroup: FC<ButtonGroupProps> = ({ children }) => (
    <StyledButtonGroup>{children}</StyledButtonGroup>
);
