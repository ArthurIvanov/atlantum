import styled from 'styled-components';
import React, { FC } from 'react';

export interface ImageProps {
    src?: string;
    alt?: string;
    width?: string;
    height?: string;
}

const StyledImage = styled.img<ImageProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;

const Image: FC<ImageProps> = ({
    src = 'https://i.ibb.co/DLtL9b8/atlantum-bg.png',
    alt,
    width = '100%',
    height = '100%',
}) => <StyledImage alt={alt} src={src} width={width} height={height} />;

export default Image;
