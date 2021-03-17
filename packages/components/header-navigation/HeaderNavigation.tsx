import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export interface StyledHeaderNavigationProps {
    children: ReactNode;
}

const StyledHeaderNavigation = styled.ul<StyledHeaderNavigationProps>`
    padding: 0;
    display: flex;
    list-style: none;
    margin: 0 0 0 40px;
    a {
        color: ${(props) => props.theme.colors.text};
    }

    & > *:not(:last-child) {
        margin-right: 24px;
    }
`;

const HeaderNavigation: FC<StyledHeaderNavigationProps> = (props) => {
    return <StyledHeaderNavigation>{props.children}</StyledHeaderNavigation>;
};

export default HeaderNavigation;
