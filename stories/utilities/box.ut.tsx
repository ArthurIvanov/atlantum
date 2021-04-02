/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';

export interface BoxProps {
    children?: ReactNode;
    className?: string;
    width?: string;
    height?: string;
}

export const StyledBox = styled.div<BoxProps>`
    display: flex;
    background-color: ${(props) => props.theme.colors.neutral200};
    color: ${(props) => props.theme.colors.neutralContentBG};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-size: 20px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

const Box: FC<BoxProps> = ({
    children,
    className,
    width = '100%',
    height = '200px',
}) => (
    <StyledBox className={className} width={width} height={height}>
        {children}
    </StyledBox>
);

export default Box;
