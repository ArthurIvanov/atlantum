import { FC, ReactNode } from 'react';
export declare type CardSize = 'full' | 'large' | 'standard' | 'compact' | 'landing';
export interface CardProps {
    /**
     * Mandatory field, you need to enter a button label.
     */
    children: ReactNode;
    /**
     * Define padding inside card component.
     * full is no-padding,
     * large is paddings-12px,
     * standard is paddings-24px,
     * compact is padding-48px,
     * landing is paddings-64px
     */
    size?: CardSize;
    /**
     * This prop in development
     * */
    isWithSeparator?: boolean;
    /**
     * This prop in development
     * */
    isShadow?: boolean;
    /**
     * Allow apply custom classes to component
     */
    className?: string;
}
export declare const Card: FC<CardProps>;
//# sourceMappingURL=card.d.ts.map