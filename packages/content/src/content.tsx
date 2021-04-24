import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export type ContentWidth = 'fluid' | 'fixed';

export interface ContentProps {
    children: ReactNode;
    contentWidth: ContentWidth;
}

const StyledContent = styled.div<ContentProps>`
    width: 100%;
    ${(props) =>
        props.contentWidth === 'fluid' &&
        `
            max-width: ${props.theme.layout.fluidWidth};
        `};

    ${(props) =>
        props.contentWidth === 'fixed' &&
        `
            max-width: ${props.theme.layout.fixedWidth};
            align-self: center;    
        `}
`;

export const Content: FC<ContentProps> = ({ children, contentWidth }) => {
    return (
        <StyledContent contentWidth={contentWidth}>{children}</StyledContent>
    );
};
