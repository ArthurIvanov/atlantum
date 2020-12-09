import * as React from 'react';
import { ReactNode, FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Menu } from 'react-feather';
import { X } from 'react-feather';

export interface MainHeaderProps {
    children: ReactNode;
}

const StyledMainHeader = styled.div<MainHeaderProps>`

  right: 0;
  left: 0;
  top: ${(props) => props.theme.spacing.space24};
  height: ${(props) => props.theme.spacing.space72};
  padding: 0  ${(props) => props.theme.spacing.space24};
  position: fixed;
  
  &::before {
  position:absolute;
  background: linear-gradient(180deg, rgba(245, 245, 247, 1) 50%, rgba(245, 245, 247, 0) 100%);
  content: '';
  height: ${(props) => props.theme.spacing.space72};
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  display: block;
  
}

    .atlantum-main-header {
        border-radius: ${(props) => props.theme.borderRadius};
        color: ${(props) => props.theme.colors.text};   
        padding: ${(props) => props.theme.spacing.space24};
        display: flex;
        position: relative;
        z-index: 100;
        align-items: center;
        justify-items: center;
        background-color: ${(props) => props.theme.colors.neutralLighter};
        box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);   
    
        }
    
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
      
    }
    
`;

const MainHeader: FC<MainHeaderProps> = (props) => {
    const [checked, setChecked] = useState<boolean>(false);
    const [windowWidth, setWindowSize] = useState<undefined | number>(0);
    const sidebar: HTMLElement | null = document.getElementById(
        'atlantum-sidebar'
    );

    console.log(windowWidth);
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
                sidebar.style.left = '-304px';
            }
        } else if (windowWidth > 1050 && checked) {
            setChecked(false);
            if (sidebar) {
                sidebar.style.left = '24px';
                sidebar.style.transform = 'translateX(0px)';
            }
        } else {
            if (sidebar) {
                sidebar.style.left = '24px';
                sidebar.style.transform = 'translateX(0px)';
            }
        }
    }

    const onClick = () => {
        setChecked(!checked);
        if (!checked) {
            if (sidebar !== null) {
                sidebar.style.transform = 'translateX(328px)';
            }
        } else if (checked) {
            if (sidebar !== null) {
                sidebar.style.transform = 'translateX(0px)';
            }
        }
    };

    return (
        <StyledMainHeader>
            <header className="atlantum-main-header">
                <button className="atlantum-header-button" onClick={onClick}>
                    {checked ? (
                        <X className="atlantum-header-icon" size={24} />
                    ) : (
                        <Menu className="atlantum-header-icon" size={24} />
                    )}
                </button>
                {props.children}
            </header>
        </StyledMainHeader>
    );
};

export default MainHeader;
