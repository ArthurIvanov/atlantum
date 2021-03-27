import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';

export type Direction = 'row' | 'column';
export type Space = '12px' | '24px' | '32px';

export interface ItemsStackProps {
    children: ReactNode;
    direction: Direction;
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
    direction,
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
