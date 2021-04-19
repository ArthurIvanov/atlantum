import { FC, ReactNode } from 'react';
declare type FontWeight = 'regular' | 'semiBold';
export interface LabelProps {
    children: ReactNode;
    htmlFor?: string;
    input?: boolean;
    danger?: boolean;
    success?: boolean;
    disabled?: boolean;
    fontWeight?: FontWeight;
    /**
     * Allow apply custom classes to component
     */
    className?: string;
}
export declare const Label: FC<LabelProps>;
export {};
//# sourceMappingURL=label.d.ts.map