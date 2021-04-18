import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';

export interface BadgeProps {
    children: ReactNode;
    onClick?: React.MouseEventHandler;
    isInfo?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
    isDanger?: boolean;
}

export const StyledBadge = styled.div<BadgeProps>`
    border-radius: ${(props) => props.theme.borderRadius};
    border: 1px solid transparent;
    background-color: ${(props) => props.theme.colors.primary200};
    color: ${(props) => props.theme.colors.neutralContentBG};
    padding: ${(props) => props.theme.spacing.space4}
        ${(props) => props.theme.spacing.space8};
    font-size: ${(props) => props.theme.typography.fontSize.subLabel};
    font-family: ${(props) => props.theme.typography.family.base};
    line-height: ${(props) => props.theme.typography.lineHeight.subLabel};
    font-weight: ${(props) => props.theme.typography.fontWeight.semiBold};

    ${(props) =>
        props.isInfo &&
        `
        border: none;
    background-color: ${props.theme.colors.infoBG};
    color: ${props.theme.colors.info300};
    
    `}

    ${(props) =>
        props.isSuccess &&
        `
        border: none;
    background-color: ${props.theme.colors.successBG};
    color: ${props.theme.colors.success300};
    
    `}
    
    ${(props) =>
        props.isWarning &&
        `
        border: none;
    background-color: ${props.theme.colors.warningBG};
    color: ${props.theme.colors.warning300};
    
    `}
    
    ${(props) =>
        props.isDanger &&
        `
        border: none;
    background-color: ${props.theme.colors.dangerBG};
    color: ${props.theme.colors.danger300};
    
    `}
`;

export const Badge: FC<BadgeProps> = ({
    children,
    isInfo,
    isSuccess,
    isWarning,
    isDanger,
}) => (
    <StyledBadge
        isInfo={isInfo}
        isSuccess={isSuccess}
        isWarning={isWarning}
        isDanger={isDanger}
    >
        {children}
    </StyledBadge>
);
