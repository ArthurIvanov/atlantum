import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';

export type CardSize = 'full' | 'large' | 'standard' | 'compact' | 'landing';

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

    // @TODO build with-separator prop
    /**
     * This prop in development
     * */
    isWithSeparator?: boolean;

    // @TODO build box-shadow prop
    /**
     * This prop in development
     * */
    isShadow?: boolean;

    /**
     * Allow apply custom classes to component
     */
    className?: string;
}

const StyledCard = styled.section<CardProps>`
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.colors.neutral[500]};
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 16px ${(props) => props.theme.colors.neutral[400]}024;

    ${(props) =>
        props.size === 'full' &&
        `
        padding: 0; 
    `};

    ${(props) =>
        props.size === 'large' &&
        `
        padding: ${props.theme.spacing[12]}; 
    `};

    ${(props) =>
        props.size === 'standard' &&
        `
        padding: ${props.theme.spacing[24]}; 
    `};

    ${(props) =>
        props.size === 'compact' &&
        `
        padding: ${props.theme.spacing[48]}; 
    `};

    ${(props) =>
        props.size === 'landing' &&
        `
        padding: ${props.theme.spacing[64]}; 
    `};
`;

export const Card: FC<CardProps> = ({ size, children, className }) => {
    return (
        <StyledCard size={size} className={className}>
            {children}
        </StyledCard>
    );
};
