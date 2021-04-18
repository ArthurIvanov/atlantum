import React from 'react';
import { FC, ReactNode } from 'react';
export interface AccordionItemProps {
    /**
     * Mandatory field, you need to enter a button label.
     */
    children?: ReactNode;
    /**
     * Accordion title `string`.
     */
    title: string;
    /**
     * Access to React event handler.
     */
    onClick?: React.MouseEventHandler;
    /**
     * Allow apply custom classes to component
     */
    className?: string;
}
export declare const AccordionItem: FC<AccordionItemProps>;
//# sourceMappingURL=accordion-item.d.ts.map