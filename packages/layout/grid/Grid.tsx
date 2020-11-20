import { FC, ReactNode } from 'react';
import * as React from 'react';
import styled from 'styled-components';

type Gap = '0' | '2' | '4' | '8' | '12' | '16' | '24';

export interface GridProps {
    children: ReactNode;
    readonly columns?: number;
    columnGap?: Gap;
    rowGap?: Gap;
}

const StyledGrid = styled.div<GridProps>`
    display: grid;
    grid-template-columns: repeat(
        ${(props) => props.theme.layout.columns},
        1fr
    );
    column-gap: ${(props) => props.columnGap}px;
    row-gap: ${(props) => props.rowGap}px;
`;

const Grid: FC<GridProps> = ({ children, columnGap = '24', rowGap = '0' }) => {
    return (
        <StyledGrid columnGap={columnGap} rowGap={rowGap}>
            {children}
        </StyledGrid>
    );
};

export default Grid;
