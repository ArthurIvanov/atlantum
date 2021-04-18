import { FC, ReactNode } from 'react';
export declare type Gap = '0' | '2' | '4' | '8' | '12' | '16' | '24' | '32' | '48';
export declare type Align = 'start' | 'center' | 'end';
export interface GridProps {
    children: ReactNode;
    readonly columns?: number;
    columnGap?: Gap;
    rowGap?: Gap;
    className?: string;
    align?: Align;
}
export declare const Grid: FC<GridProps>;
//# sourceMappingURL=grid.d.ts.map