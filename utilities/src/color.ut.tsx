/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';

export interface ColorProps {
    children?: ReactNode;
    className?: string;
    color: string;
}

export const StyledColor = styled.div<ColorProps>`
    display: flex;
    background-color: ${(props) => props.theme.colors.neutral200};
    color: ${(props) => props.theme.colors.neutralContentBG};
    width: 64px;
    height: 64px;
    font-size: 20px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.color};
`;

const Box: FC<ColorProps> = ({ children, className, color }) => (
    <StyledColor color={color} className={className}>
        {children}
    </StyledColor>
);

export default Box;
