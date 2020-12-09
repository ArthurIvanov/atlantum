import { FC, ReactNode } from 'react';
import * as React from 'react';
import styled from 'styled-components';

export type ContainerAlign = 'centered' | 'sidebar';

export interface ContainerProps {
    children: ReactNode;
    align: ContainerAlign;
}

const StyledContainer = styled.div<ContainerProps>`
    margin-top: 96px;
    padding: 24px;

    section:not(:last-child) {
        margin-bottom: 24px;
    }
    ${(props) =>
        props.align === 'sidebar' &&
        `
        @media only screen and (min-width: 600px) {
        margin-left:0;
    }
        @media only screen and (min-width: 1050px) {
            margin-left: 280px;
        }
    `}
    ${(props) =>
        props.align === 'centered' &&
        `
        @media only screen and (min-width: 600px) {
        margin: 0 auto;
    }
        @media only screen and (min-width: 1050px) {
            margin: 0 auto;
        }
    `};
`;

const Container: FC<ContainerProps> = ({ children, align }) => {
    return <StyledContainer align={align}>{children}</StyledContainer>;
};

export default Container;