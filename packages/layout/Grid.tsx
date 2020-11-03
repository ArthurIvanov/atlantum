import { FC, ReactNode } from 'react';
import * as React from 'react';

export interface GridProps {
    children: ReactNode;
    gap?: 24;
    columns?: 12;
    columnGap?: 12;
    rowGap?: 12;
}

export const Grid: FC<GridProps> = ({
    columns = 12,
    children,
    gap,
    columnGap,
    rowGap,
}) => {
    const GridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns} 1fr)`,
        gridColumnGap: `${gap}`,
    };

    return <div style={GridStyle}>{children}</div>;
};
