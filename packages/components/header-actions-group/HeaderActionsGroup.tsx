import * as React from 'react';
import { ReactNode, FC } from 'react';
import styled from 'styled-components';

export interface StyledHeaderActionsGroupProps {
    children: ReactNode;
}

const StyledHeaderActionsGroup = styled.ul<StyledHeaderActionsGroupProps>`
    padding: 0;
    display: flex;
    list-style: none;
    margin: 0 0 0 40px;
    justify-self: flex-end;

    button > *:not(:first-child) {
        margin-left: 24px;
    }
`;

const HeaderNavigation: FC<StyledHeaderActionsGroupProps> = ({ children }) => {
    return <StyledHeaderActionsGroup>{children}</StyledHeaderActionsGroup>;
};

export default HeaderNavigation;
