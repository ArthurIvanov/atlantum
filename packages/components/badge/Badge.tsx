import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';

export interface BadgeProps {
    children: ReactNode;
    onClick?: React.MouseEventHandler;
    isOutline?: boolean;
    isInfo?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
    isDanger?: boolean;
}

export const StyledBadge = styled.div<BadgeProps>`
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.colors.primary200};
    color: ${(props) => props.theme.colors.neutralContentBG};
    padding: ${(props) => props.theme.spacing.space8}
        ${(props) => props.theme.spacing.space16};
    font-size: ${(props) => props.theme.typography.fontSize.subLabel};
    font-family: ${(props) => props.theme.typography.family.base};
    line-height: ${(props) => props.theme.typography.lineHeight.subLabel};
    font-weight: ${(props) => props.theme.typography.fontWeight.regular};
`;

const Badge: FC<BadgeProps> = (props) => (
    <StyledBadge>{props.children}</StyledBadge>
);

export default Badge;
