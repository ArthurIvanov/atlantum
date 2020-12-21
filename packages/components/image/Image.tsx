import styled from 'styled-components';
import * as React from 'react';
import { FC } from 'react';

export interface ImageProps {
    src: string;
    alt?: string;
    width?: string;
    height?: string;
}

const StyledImage = styled.img<ImageProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;

const Image: FC<ImageProps> = ({ src, alt, width, height }) => (
    <StyledImage alt={alt} src={src} width={width} height={height} />
);

export default Image;
