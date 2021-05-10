import { FC, ReactNode } from 'react';
export declare type AccordionSize = 'compact' | 'standard' | 'large';
export interface AccordionProps {
    /**
     * Required field, you need to pass there accordion-item component.
     */
    children: ReactNode;
    size?: AccordionSize;
    isWithSeparator?: boolean;
    isHorizontal?: boolean;
    /**
     * Allow apply custom classes to component
     */
    className?: string;
}
export declare const Accordion: FC<AccordionProps>;
//# sourceMappingURL=accordion.d.ts.map