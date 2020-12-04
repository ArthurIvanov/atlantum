import * as React from 'react';
import { ReactNode, FC } from 'react';
import styled from 'styled-components';

export interface SidebarProps {
    children?: ReactNode;
}

const StyledSidebar = styled.div<SidebarProps>`
    border-radius: ${(props) => props.theme.borderRadius};
    color: ${(props) => props.theme.colors.text};
    display: flex;
    flex-direction: row;
    position: fixed;
    left: 0;
    transform: translateX(0px);
    padding: ${(props) => props.theme.spacing.space24};
    top: 96px;
    width: 256px;
    height: 100%;
    background-color: ${(props) => props.theme.colors.neutralLighter};
    transition: all ease-in-out 0.4s;

    @media only screen and (max-width: 1050px) {
    }
`;

const Sidebar: FC<SidebarProps> = (props) => {
    return (
        <StyledSidebar id="atlantum-sidebar">{props.children}</StyledSidebar>
    );
};

export default Sidebar;
