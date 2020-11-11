import * as React from 'react';
import { FC, Fragment, ReactNode } from 'react';
import styled from 'styled-components';

export type TextSize = 'subLabel' | 'label';

export type TextTags =
    | 'p'
    | 'i'
    | 'u'
    | 'abbr'
    | 'cite'
    | 'del'
    | 'em'
    | 'ins'
    | 'kbd'
    | 'mark'
    | 's'
    | 'samp'
    | 'span'
    | 'small'
    | 'strong'
    | 'sub'
    | 'sup';

export interface TextProps {
    children?: ReactNode;
    as?: TextTags;
    size?: TextSize;
}

const StyledText = styled(Fragment)<TextProps>`
    font-size: ${(props) => props.theme.typography.fontSize.base};
    font-weight: ${(props) => props.theme.typography.fontWeight.base};
    line-height: ${(props) => props.theme.typography.lineHeight.base};
    color: ${(props) => props.theme.colors.text};

    ${(props) =>
        props.size === 'label' &&
        `
        font-size: ${props.theme.typography.fontSize.label};
        line-height: ${props.theme.typography.lineHeight.label};
    `}

    ${(props) =>
        props.size === 'subLabel' &&
        `
        font-size: ${props.theme.typography.fontSize.subLabel};
         line-height: ${props.theme.typography.lineHeight.subLabel};
    `}
`;

const Text: FC<TextProps> = ({ as, children, size }) => {
    return (
        <StyledText as={as} size={size}>
            {children}
        </StyledText>
    );
};

export default Text;
