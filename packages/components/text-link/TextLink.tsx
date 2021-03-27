import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Icon from '@atlantum/icons';

export interface TextLinkProps {
    children: ReactNode;
    onClick?: React.MouseEventHandler;
    isIcon?: boolean;
    href?: string;
}

const StyledTextLink = styled.button<TextLinkProps>`
    cursor: pointer;
    display: flex;
    color: ${(props) => props.theme.colors.primary200};
    text-decoration: none;
    font-size: ${(props) => props.theme.typography.fontSize.base};
    font-weight: ${(props) => props.theme.typography.fontWeight.base};
    line-height: ${(props) => props.theme.typography.lineHeight.base};
    &:hover {
        color: ${(props) => props.theme.colors.primary300};
        .atlantum-navlink-icon {
            &:hover {
                color: ${(props) => props.theme.colors.primary300};
            }
        }
    }

    .atlantum-navlink {
        margin-left: ${(props) => props.theme.spacing.space24};
    }

    .atlantum-navlink-icon {
        margin-left: ${(props) => props.theme.spacing.space8};
    }
`;

const TextLink: FC<TextLinkProps> = ({ children, onClick, isIcon, href }) => {
    return (
        <StyledTextLink
            as="a"
            href={href}
            onClick={onClick}
            className="atlantum-navlink"
        >
            {children}
            {isIcon && (
                <Icon
                    name="chevron-down"
                    className="atlantum-navlink-icon"
                    size={20}
                />
            )}
        </StyledTextLink>
    );
};

export default TextLink;
