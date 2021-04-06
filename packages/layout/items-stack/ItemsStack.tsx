import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';

export type Direction = 'row' | 'column';
export type Space = '4px' | '8px' | '12px' | '24px' | '32px';

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
     * Space between elements in stack.
     * Can be 12px | 24px | 32px
     * */
    space?: Space;

    /**
     * Allow apply custom classes to component
     */
    className?: string;
}

const StyledItemsStack = styled.ul<ItemsStackProps>`
    display: flex;

    ${(props) =>
        props.direction === 'column' &&
        `    
        flex-direction: column;
        & > *:not(:last-child) {
            margin-bottom: ${props.space};
        }              
    `}

    ${(props) =>
        props.direction === 'row' &&
        `
        align-items: center;
        flex-direction: row;
        & > *:not(:last-child) {
            margin-right: ${props.space};
        }
    `}
`;

const ItemsStack: FC<ItemsStackProps> = ({
    children,
    direction = 'row',
    space = '24px',
    className,
}) => {
    return (
        <StyledItemsStack
            direction={direction}
            space={space}
            className={className}
        >
            {children}
        </StyledItemsStack>
    );
};

export default ItemsStack;
