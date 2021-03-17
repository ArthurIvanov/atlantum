import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export type ContainerAlign = 'centered' | 'sidebar';

export interface ContainerProps {
    children: ReactNode;
    align: ContainerAlign;
}

const StyledContainer = styled.div<ContainerProps>`
    margin-top: 96px;

    section:not(:last-child) {
        margin-bottom: 24px;
    }

    ${(props) =>
        props.align === 'sidebar' &&
        `
        @media only screen and (min-width: ${props.theme.layout.mediumBp}) {
        margin-left:0;
    }
        @media only screen and (min-width: ${props.theme.layout.largeBp}) {
            margin-left: 280px;
        }
    `}
    ${(props) =>
        props.align === 'centered' &&
        `
        @media only screen and (min-width: ${props.theme.layout.mediumBp}) {
        margin-left: auto;
        margin-right: auto;
    }
        @media only screen and (min-width: ${props.theme.layout.largeBp}) {
           margin-left: auto;
            margin-right: auto;
        }
    `};
`;

const Container: FC<ContainerProps> = ({ children, align }) => {
    return <StyledContainer align={align}>{children}</StyledContainer>;
};

export default Container;
