import styled from 'styled-components';
import * as React from 'react';
import { FC, ReactNode } from 'react';

export type CardSize = 'compact' | 'standard' | 'large' | 'landing';

// @TODO build box-shadow prop
export interface CardProps {
    children: ReactNode;
    size?: CardSize;
    isWithSeparator?: boolean;
    isDark?: boolean;
}

const StyledCard = styled.section<CardProps>`
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.colors.neutralLighter};
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.08);

    ${(props) =>
        props.size === 'compact' &&
        `
        padding: ${props.theme.spacing.space12}; 
    `};

    ${(props) =>
        props.size === 'standard' &&
        `
        padding: ${props.theme.spacing.space24}; 
    `};

    ${(props) =>
        props.size === 'large' &&
        `
        padding: ${props.theme.spacing.space48}; 
    `};

    ${(props) =>
        props.size === 'landing' &&
        `
        padding: ${props.theme.spacing.space64}; 
    `};
`;

const Card: FC<CardProps> = ({ isWithSeparator, size, isDark, children }) => {
    return (
        <StyledCard
            size={size}
            isWithSeparator={isWithSeparator}
            isDark={isDark}
        >
            {children}
        </StyledCard>
    );
};

export default Card;
