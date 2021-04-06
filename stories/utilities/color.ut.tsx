/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';

export interface ColorProps {
    children?: ReactNode;
    className?: string;
}

export const StyledBox = styled.div<ColorProps>`
    display: flex;
    background-color: ${(props) => props.theme.colors.neutral200};
    color: ${(props) => props.theme.colors.neutralContentBG};
    width: 64px;
    height: 64px;
    font-size: 20px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

const Box: FC<BoxProps> = ({ children, className }) => (
    <StyledBox className={className} width={width} height={height}>
        {children}
    </StyledBox>
);

export default Box;
