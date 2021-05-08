import * as React from 'react';
import { FC, Fragment, ReactNode } from 'react';
import styled from 'styled-components';

export type TextSize = 'label' | 'subLabel';

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

    /**
     *  Choose which html markup text should be.
     * */
    as?: TextTags;

    /**
     *  Change size from base `16px`
     *  to label `14px`
     *  or sublabel `12px`
     * */
    size?: TextSize;

    /**
     *  If `true` text-align:center rule are applied.
     * */
    centered?: boolean;

    /**
     * Allow apply custom classes to component
     */
    className?: string;
}

const StyledText = styled(Fragment)<TextProps>`
    font-size: ${(props) => props.theme.typography.fontSize.base};
    font-weight: ${(props) => props.theme.typography.fontWeight.base};
    line-height: ${(props) => props.theme.typography.lineHeight.base};
    color: ${(props) => props.theme.colors.neutral[400]};
    margin: 0;

    ${(props) =>
        props.centered &&
        `
        text-align: center;
    `}

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

export const Text: FC<TextProps> = ({
    as,
    children,
    size,
    centered,
    className,
}) => {
    return (
        <StyledText
            as={as}
            size={size}
            centered={centered}
            className={className}
        >
            {children}
        </StyledText>
    );
};
