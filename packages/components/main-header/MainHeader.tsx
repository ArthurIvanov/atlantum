import * as React from 'react';
import { ReactNode, FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Menu } from 'react-feather';
import { X } from 'react-feather';

export interface MainHeaderProps {
    children: ReactNode;
}

const StyledMainHeader = styled.header<MainHeaderProps>`
    border-radius: ${(props) => props.theme.borderRadius};
    color: ${(props) => props.theme.colors.text};

    padding-left: ${(props) => props.theme.spacing.space24};
    padding-right: ${(props) => props.theme.spacing.space24};
    display: flex;
    align-items: center;
    position: sticky;
    top: 24px;
    height: 72px;
    justify-items: center;
    background-color: ${(props) => props.theme.colors.neutralLighter};
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);

    a,
    a:active,
    a:visited {
        display: block;
        text-decoration: none;
        margin: 0 0 0 ${(props) => props.theme.spacing.space12};
        color: ${(props) => props.theme.colors.textInverted};
    }

    button.atlantum-header-button {
        display: block;
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        background-color: transparent;
    }

    .atlantum-header-icon {
        display: none;
        color: ${(props) => props.theme.colors.text};
        @media only screen and (max-width: 1050px) {
            display: block;
            margin: 0 ${(props) => props.theme.spacing.space12};
        }
    }
`;

const MainHeader: FC<MainHeaderProps> = (props) => {
    const [checked, setChecked] = useState<boolean>(false);
    const [windowWidth, setWindowSize] = useState<undefined | number>(0);
    const sidebar: HTMLElement | null = document.getElementById(
        'atlantum-sidebar'
    );

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    if (windowWidth != undefined) {
        if (windowWidth < 1050) {
            if (sidebar !== null) {
                sidebar.style.left = '-280px';
            }
        } else if (windowWidth > 1050 && checked) {
            console.log(checked);
            setChecked(false);
            if (sidebar !== null) {
                sidebar.style.left = '24px';
                sidebar.style.transform = 'translateX(24px)';
            }
        }
    }

    const onClick = () => {
        setChecked(!checked);
        if (!checked) {
            if (sidebar !== null) {
                sidebar.style.transform = 'translateX(280px)';
            }
        } else if (checked) {
            if (sidebar !== null) {
                sidebar.style.transform = 'translateX(0px)';
            }
        }
    };

    return (
        <StyledMainHeader>
            <button className="atlantum-header-button" onClick={onClick}>
                {checked ? (
                    <X className="atlantum-header-icon" size={24} />
                ) : (
                    <Menu className="atlantum-header-icon" size={24} />
                )}
            </button>
            {props.children}
        </StyledMainHeader>
    );
};

export default MainHeader;
