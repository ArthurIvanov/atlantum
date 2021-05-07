import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export interface TextLinkProps {
    children: ReactNode;
    onClick?: React.MouseEventHandler;
    Icon?: ReactNode;
    href?: string;

    /**
     * Allow apply custom classes to component
     */
    className?: string;

    as?: string;
}

const StyledTextLink = styled.button<TextLinkProps>`
    cursor: pointer;
    display: flex;
    color: ${(props) => props.theme.colors.neutral400};
    text-decoration: none;
    font-size: ${(props) => props.theme.typography.fontSize.base};
    font-weight: ${(props) => props.theme.typography.fontWeight.base};
    line-height: ${(props) => props.theme.typography.lineHeight.base};
    &:hover {
        color: ${(props) => props.theme.colors.neutral300};
        .atlantum-textlink-icon {
            &:hover {
                color: ${(props) => props.theme.colors.neutral300};
            }
        }
    }

    .atlantum-textlink {
        margin-left: ${(props) => props.theme.spacing.space24};
    }

    .atlantum-textlink-icon {
        margin-left: ${(props) => props.theme.spacing.space8};
    }
`;

export const TextLink: FC<TextLinkProps> = ({
    children,
    onClick,
    Icon,
    href,
    className,
}) => {
    return (
        <StyledTextLink
            area-current="page"
            as="a"
            href={href}
            onClick={onClick}
            className={`${className} "atlantum-textlink"`}
        >
            {children}
            {Icon && <span className="atlantum-textlink-icon">{Icon}</span>}
        </StyledTextLink>
    );
};
