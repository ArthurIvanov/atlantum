import { FC, ReactNode } from 'react';
import * as React from 'react';
import styled from 'styled-components';

export type Gap = '0' | '2' | '4' | '8' | '12' | '16' | '24' | '32' | '48';
export type Align = 'start' | 'center' | 'end';

export interface GridProps {
    children: ReactNode;
    readonly columns?: number;
    columnGap?: Gap;
    rowGap?: Gap;
    className?: string;
    align?: Align;
}

const StyledGrid = styled.div<GridProps>`
    display: grid;
    grid-template-columns: repeat(
        ${(props) => props.theme.layout.columns},
        1fr
    );
    column-gap: ${(props) => props.columnGap}px;
    row-gap: ${(props) => props.rowGap}px;

    ${(props) =>
        props.align === 'start' &&
        `
        align-items: start;
    
    `}

    ${(props) =>
        props.align === 'center' &&
        `
        align-items: center;
    
    `}

    ${(props) =>
        props.align === 'end' &&
        `
        align-items: end;
    
    `}
`;

const Grid: FC<GridProps> = ({
    children,
    columnGap = '24',
    rowGap = '0',
    align = 'start',
}) => {
    return (
        <StyledGrid
            className="atlantum-grid"
            columnGap={columnGap}
            rowGap={rowGap}
            align={align}
        >
            {children}
        </StyledGrid>
    );
};

export default Grid;
