import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export type ContentWidth = 'full' | 'focus';

export interface ContentProps {
    children: ReactNode;
    width?: ContentWidth;
}

const StyledContent = styled.div<ContentProps>`
    width: 100%;

    ${(props) =>
        props.width === 'full' &&
        `
            max-width: 100%;
        `};

    ${(props) =>
        props.width === 'focus' &&
        `
            max-width: 1032px;
            align-self: center;    
        `}
`;

export const Content: FC<ContentProps> = ({ children, width }) => {
    return <StyledContent width={width}>{children}</StyledContent>;
};
