import { FC, ReactNode } from 'react';
export declare type Direction = 'row' | 'column';
export declare type Distance = '4px' | '8px' | '12px' | '24px' | '32px';
export interface ItemsStackProps {
    /**
     * Required field, you need to pass here component or any valid value
     * */
    children: ReactNode;
    /**
     * Flex direction for stack elements, can be `vertical` or `horizontal` value
     * */
    direction?: Direction;
    /**
     * Distance between elements in stack.
     * Can be 12px | 24px | 32px
     * */
    distance?: Distance;
    /**
     * Allow apply custom classes to component
     */
    className?: string;
}
export declare const ItemsStack: FC<ItemsStackProps>;
//# sourceMappingURL=items-stack.d.ts.map