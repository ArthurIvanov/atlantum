import { FC, ReactNode } from 'react';
import * as React from 'react';
import styled from 'styled-components';

export type ContentWidth = 'full' | 'focus';

export interface ContentProps {
    children: ReactNode;
    width?: ContentWidth;
}

const StyledContent = styled.div<ContentProps>`
    ${(props) =>
        props.width === 'full' &&
        `
            max-width: 100%;
        `};

    ${(props) =>
        props.width === 'focus' &&
        `
            width: 1050px;
            margin: 0 auto;
        `}
`;

const Content: FC<ContentProps> = ({ children, width }) => {
    return <StyledContent width={width}>{children}</StyledContent>;
};

export default Content;
