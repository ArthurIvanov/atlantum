import styled from 'styled-components';
import * as React from 'react';
import { FC, ReactNode } from 'react';
import { ChevronDown } from 'react-feather';

export interface TextLinkProps {
    children: ReactNode;
    onClick?: React.MouseEventHandler;
    isIcon?: boolean;
    src: string;
}

const StyledTextLink = styled.a<TextLinkProps>`
    cursor: pointer;
    display: flex;
    &:hover {
        color: blue;
        .atlantum-navlink-icon {
            &:hover {
                color: blue;
            }
        }
    }

    .atlantum-navlink {
        margin-left: 24px;
    }

    .atlantum-navlink-icon {
        margin-left: 8px;
    }
`;

const TextLink: FC<TextLinkProps> = ({ children, onClick, isIcon,src}) => {
    return (
        <StyledTextLink src={src} onClick={onClick} className="atlantum-navlink">
            {children}
            {isIcon && <ChevronDown className="atlantum-navlink-icon" size={20} />}

        </StyledTextLink>
    );
};

export default TextLink;
