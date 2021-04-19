import { FC, ReactNode } from 'react';
declare type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface HeadingProps {
    /**
     * Required field, value should be passed here.
     * */
    children: ReactNode;
    /**
     * Choose the level of heading which you need to
     * available type is 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
     * */
    as: Headings;
    /**
     *  If `true` text-align:center rule are applied.
     * */
    centered?: boolean;
    /**
     * Allow apply custom classes to component
     */
    className?: string;
}
export declare const Heading: FC<HeadingProps>;
export {};
//# sourceMappingURL=heading.d.ts.map