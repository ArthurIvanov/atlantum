import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';

export type Direction = 'row' | 'column';
export type Space = '12px' | '24px' | '32px';

export interface ItemsStackProps {
    children: ReactNode;
    direction: Direction;
    space?: Space;
}

const StyledItemsStack = styled.ul<ItemsStackProps>`
    display: flex;
    align-items: center;

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
}) => {
    return (
        <StyledItemsStack direction={direction} space={space}>
            {children}
        </StyledItemsStack>
    );
};

export default ItemsStack;
