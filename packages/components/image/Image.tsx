import styled from 'styled-components';
import React, { FC } from 'react';

export interface ImageProps {
    /**
     * source link to image
     * */
    src?: string;

    /**
     * Alt text for an image
     * */
    alt?: string;

    /**
     * width of image
     * */
    width?: string;

    /**
     * height of image
     * */
    height?: string;

    /**
     * If `true` creates corner radius
     * */
    isRounded?: boolean;

    /**
     * Allow apply custom classes to component
     */
    className?: string;
}

const StyledImage = styled.img<ImageProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    ${(props) =>
        props.isRounded &&
        `
        border-radius: ${props.theme.borderRadius};
    `}
`;

const Image: FC<ImageProps> = ({
    src = 'https://i.ibb.co/DLtL9b8/atlantum-bg.png',
    alt,
    width = '100%',
    height = '100%',
    isRounded = true,
    className,
}) => (
    <StyledImage
        alt={alt}
        src={src}
        width={width}
        height={height}
        isRounded={isRounded}
        className={className}
    />
);

export default Image;
