import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';

export interface NavigationLinkProps {
    children: ReactNode;
    onClick?: React.MouseEventHandler;
    as?: string;
    href?: string;

    /**
     * Allow apply custom classes to component
     */
    className?: string;
}

const StyledNavigationLink = styled.button<NavigationLinkProps>`
    display: flex;
    padding: ${(props) => props.theme.spacing[8]}
        ${(props) => props.theme.spacing[24]};
    text-decoration: none;
    cursor: pointer;
    border-radius: ${(props) => props.theme.borderRadius};
    color: ${(props) => props.theme.colors.neutral[400]};
    transition: 0.2s ease;
    &:hover {
        color: ${(props) => props.theme.colors.primary[200]};
    }
    &:focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary[100]};
        color: ${(props) => props.theme.colors.primary[200]};
    }
`;

export const NavigationLink: FC<NavigationLinkProps> = ({
    children,
    href,
    className,
}) => {
    return (
        <StyledNavigationLink as={'a'} href={href} className={className}>
            {children}
        </StyledNavigationLink>
    );
};
