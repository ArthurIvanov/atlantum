import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export type BannerSizes = 'regular' | 'large' | 'hero';

export interface ProductBannerProps {
    children: ReactNode;
    backgroundImage: string;
    size?: BannerSizes;
    /**
     * Allow apply custom classes to component
     */
    className?: string;
}

const StyledProductBanner = styled.div<ProductBannerProps>`
    border: none;
    border-radius: ${(props) => props.theme.spacing.space8};
    margin-bottom: ${(props) => props.theme.spacing.space24};
    background-size: auto;
    background: url(${(props) => props.backgroundImage}) no-repeat center;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    padding: ${(props) => props.theme.spacing.space24};
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);

    ${(props) =>
        props.size === 'regular' &&
        `
        height: 256px;
    `}

    ${(props) =>
        props.size === 'large' &&
        `
        height: 320px;
    `}
    
    ${(props) =>
        props.size === 'hero' &&
        `
        height: 540px;
    `}
    
    h1,h2,h3,h4,h5,h6 {
        margin-bottom: ${(props) => props.theme.spacing.space24};
        color: ${(props) => props.theme.colors.textInverted};
    }
`;

export const ProductBanner: FC<ProductBannerProps> = ({
    children,
    backgroundImage,
    size = 'regular',
    className,
}) => {
    return (
        <StyledProductBanner
            backgroundImage={backgroundImage}
            size={size}
            className={className}
        >
            <div className="atlantum-product-banner-content">{children}</div>
        </StyledProductBanner>
    );
};
