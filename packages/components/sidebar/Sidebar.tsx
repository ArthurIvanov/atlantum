import * as React from 'react';
import { ReactNode, FC } from 'react';
import styled from 'styled-components';

export interface SidebarProps {
    children?: ReactNode;
}

const StyledSidebar = styled.div<SidebarProps>`
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    left: 0;
    padding: ${(props) => props.theme.spacing.space24};
    margin-top: ${(props) => props.theme.spacing.space48};
    width: 256px;
    height: 100%;
    background-color: ${(props) => props.theme.colors.primaryDark};
    transition: all ease-in-out 0.4s;

    @media only screen and (max-width: 1050px) {
        left: -286px;
    }
`;

const Sidebar: FC<SidebarProps> = (props) => {
    return (
        <StyledSidebar id="atlantum-sidebar">{props.children}</StyledSidebar>
    );
};

export default Sidebar;
