import React, { FC } from 'react';
import styled from 'styled-components';

type Orientation = 'horizontal' | 'vertical';

export interface DividerProps {
    orientation?: Orientation;
    length?: string;
}

const StyledDivider = styled.hr<DividerProps>`
    display: block;
    padding: 0;
    margin: 0;
    border: none;

    height: 1px;
    background-color: ${(props) => props.theme.colors.neutral[300]};

    ${(props) =>
        props.orientation === 'horizontal' &&
        `
        width: ${props.length};
        height: 1px;
    `}

    ${(props) =>
        props.orientation === 'vertical' &&
        `
        height: ${props.length};
        width: 1px;
    `}
`;

export const Divider: FC<DividerProps> = ({ orientation, length }) => (
    <StyledDivider orientation={orientation} length={length} />
);
