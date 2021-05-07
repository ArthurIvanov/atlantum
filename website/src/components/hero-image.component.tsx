import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';

interface HeroImageProps {
    url: string;
    children?: ReactNode;
}

const StyledHeroImage = styled.section<HeroImageProps>`
    display: flex;
    width: 100vh;
    height: 100vm;
    align-items: center;
    justify-content: center;
    background-image: url(${(props) => props.url});
`;

export const HeroImage: FC<HeroImageProps> = ({ url, children }) => {
    return <StyledHeroImage url={url}>{children}</StyledHeroImage>;
};
