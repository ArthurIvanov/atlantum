import styled from 'styled-components';
import * as React from 'react';
import { FC, ReactNode } from 'react';

export type CardSize = 'compact' | 'standard' | 'large' | 'landing';

export interface CardProps {
    children: ReactNode;
    size?: CardSize;
    withSeparator?: boolean;
    onDark?: boolean;
    centered?: boolean;
}

const StyledCard = styled.div<CardProps>`
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.colors.neutralLighter};
    width: 100%;
    display: flex;
    flex-direction: column;

    ${(props) =>
        props.size === 'standard' &&
        `
        padding: ${props.theme.spacing.space24};
        
    `};

    ${(props) =>
        props.centered &&
        `
        justify-content: center;
        
    `};
`;

const Card: FC<CardProps> = ({
    withSeparator,
    size,
    onDark,
    children,
    centered,
}) => {
    return (
        <StyledCard
            size={size}
            withSeparator={withSeparator}
            onDark={onDark}
            centered={centered}
        >
            {children}
        </StyledCard>
    );
};

export default Card;
