import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';
import { Icon } from '@atlantum/icons';

type AvatarSize = 'default' | 'large';

export interface AvatarProps {
    /**
     * Initials which are passed to `Avatar`
     * if no Initials provided it will fallback to standard icon.
     */
    children?: ReactNode;

    /**
     * The size of the `Avatar`
     */
    size?: AvatarSize;

    /**
     * The image url of the `Avatar`
     * * if no image url are provided it will fallback to standard icon.
     */
    src?: string;
}

const StyledAvatar = styled.div<AvatarProps>`
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.colors.primary[200]};
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.neutral[600]};
    background: ${(props) => props.theme.colors.primary[200]};
    font-weight: ${(props) => props.theme.typography.fontWeight.semiBold};

    ${(props) =>
        props.size === 'default' &&
        `
        width: ${props.theme.spacing[32]};
        height: ${props.theme.spacing[32]};
        font-size: ${props.theme.typography.fontSize.base};
        line-height: ${props.theme.typography.lineHeight.base};
    `}

    ${(props) =>
        props.size === 'large' &&
        `
        width: ${props.theme.spacing[48]};
        height: ${props.theme.spacing[48]};
        font-size: ${props.theme.typography.fontSize.h5};
        line-height: ${props.theme.typography.lineHeight.h5};
        .atlantum-avatar-icon {
        width: ${props.theme.spacing[32]};
        height: ${props.theme.spacing[32]};
        }
    `}

    ${(props) =>
        props.src &&
        `
        background-color: none;
        background-image: url(${props.src});
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover;
    
    `}
`;

export const Avatar: FC<AvatarProps> = ({
    children,
    src,
    size = 'default',
}) => {
    return (
        <StyledAvatar src={src} size={size}>
            {src ? null : children ? (
                children
            ) : (
                <Icon className="atlantum-avatar-icon" name="user" />
            )}
        </StyledAvatar>
    );
};
