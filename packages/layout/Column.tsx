import * as React from 'react';
import { FC, ReactNode } from 'react';

export interface ColumnProps {
    children: ReactNode;
    smallBP?: number;
    mediumBP?: number;
    largeBP?: number;
}

export const Column: FC<ColumnProps> = ({
    children,
    smallBP = 12,
    mediumBP = 12,
    largeBP = 12,
}) => {
    return (
        <div className={`sm-${smallBP} md-${mediumBP} lg-${largeBP}`}>
            {children}
        </div>
    );
};
