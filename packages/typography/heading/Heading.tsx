import * as React from 'react';
import styled from 'styled-components';
import { FC, ReactNode, Fragment } from 'react';

type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps {
    children: ReactNode;
    as: Headings;
    centered?: boolean;
    onDark?: boolean;
}

const StyledHeading = styled(Fragment)<HeadingProps>`
    margin: 0;
    font-weight: ${(props) => props.theme.typography.fontWeight.semiBold};
    font-family: ${(props) => props.theme.typography.family.heading};
    color: ${(props) => props.theme.colors.neutral400};

    ${(props) =>
        props.centered &&
        `
         text-align: center;
    `}

    ${(props) =>
        props.onDark &&
        `
         color: ${props.theme.colors.neutralContentBG};
    `}

    ${(props) =>
        props.as === 'h1' &&
        `
        font-size: ${props.theme.typography.fontSize.h1};
        line-height: ${props.theme.typography.lineHeight.h1};        
    `};

    ${(props) =>
        props.as === 'h2' &&
        `
        font-size: ${props.theme.typography.fontSize.h2};
        line-height: ${props.theme.typography.lineHeight.h2};       
    `};

    ${(props) =>
        props.as === 'h3' &&
        `
        font-size: ${props.theme.typography.fontSize.h3};
        line-height: ${props.theme.typography.lineHeight.h3};        
    `};

    ${(props) =>
        props.as === 'h4' &&
        `
        font-size: ${props.theme.typography.fontSize.h4};
        line-height: ${props.theme.typography.lineHeight.h4};    
    `};

    ${(props) =>
        props.as === 'h5' &&
        `
        font-size: ${props.theme.typography.fontSize.h5};
        line-height: ${props.theme.typography.lineHeight.h5};
    `};

    ${(props) =>
        props.as === 'h6' &&
        `
        font-size: ${props.theme.typography.fontSize.h6};
        line-height: ${props.theme.typography.lineHeight.h6};

    `};
`;

const Heading: FC<HeadingProps> = ({ as = 'h1', children, centered }) => {
    return (
        <StyledHeading as={as} centered={centered}>
            {children}
        </StyledHeading>
    );
};

export default Heading;
