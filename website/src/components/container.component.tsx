import styled from 'styled-components';
import * as React from 'react';
import { FC, ReactNode } from 'react';

interface ContainerProps {
    children?: ReactNode;
}

const StyledContainer = styled.section<ContainerProps>`
    display: block;
    max-width: 1200px;
    margin-left: 340px;
    margin-right: 24px;
    padding: 24px;
    background-color: ${(props) => props.theme.colors.neutralContentBG};
`;

export const Container: FC<ContainerProps> = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>;
};
