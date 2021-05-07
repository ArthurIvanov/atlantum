import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';

interface HeroImageProps {
    url: string;
    children?: ReactNode;
}

const StyledHeroImage = styled.section<HeroImageProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: url(${(props) => props.url}) no-repeat center;
    background-size: auto;
`;

export const HeroImage: FC<HeroImageProps> = ({
    url = 'https://ibb.co/hCyCBMZ',
    children,
}) => {
    return <StyledHeroImage url={url}>{children}</StyledHeroImage>;
};
