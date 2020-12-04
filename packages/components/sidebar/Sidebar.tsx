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
    left: 24px;
    transform: translateX(0px);
    padding: ${(props) => props.theme.spacing.space24};
    top: 120px;
    width: 256px;
    height: 100%;
    background-color: ${(props) => props.theme.colors.neutralLighter};
    transition: all ease-in-out 0.4s;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);
`;

const Sidebar: FC<SidebarProps> = (props) => {
    return (
        <StyledSidebar id="atlantum-sidebar">{props.children}</StyledSidebar>
    );
};

export default Sidebar;
