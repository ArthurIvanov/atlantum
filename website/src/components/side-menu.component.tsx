import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';

interface SideMenuProps {
    children: ReactNode;
}

const StyledSideMenu = styled.aside<SideMenuProps>`
    position: fixed;
    top: -24px;
    left: 0;
    width: 240px;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.neutralContentBG};
    border-right: 1px solid ${(props) => props.theme.colors.neutral100};
    padding: 24px;
`;

export const SideMenu: FC<SideMenuProps> = ({ children }) => {
    return <StyledSideMenu>{children}</StyledSideMenu>;
};
