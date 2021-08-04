import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

type TagColor = 'neutral' | 'red' | 'blue' | 'green' | 'orange';

export interface TagProps {
    children: ReactNode;
    tagColor?: TagColor;
}

const StyledTag = styled.div<TagProps>`
    padding: ${(props) => props.theme.spacing[4]}
        ${(props) => props.theme.spacing[8]};
    border-radius: 32px;
    font-size: ${(props) => props.theme.typography.fontSize.subLabel};
    font-weight: ${(props) => props.theme.typography.fontWeight.semiBold};
    line-height: ${(props) => props.theme.typography.lineHeight.subLabel};

    ${(props) =>
        props.tagColor === 'neutral' &&
        `
        color: ${props.theme.colors.neutral[400]};
        background-color: ${props.theme.colors.neutral[600]};
    `}

    ${(props) =>
        props.tagColor === 'red' &&
        `
        color: ${props.theme.colors.danger[400]};
        background-color: ${props.theme.colors.danger[500]};
    `}

	${(props) =>
        props.tagColor === 'blue' &&
        `
        color: ${props.theme.colors.info[400]};
        background-color: ${props.theme.colors.info[500]};
    `}

	${(props) =>
        props.tagColor === 'green' &&
        `
        color: ${props.theme.colors.success[400]};
        background-color: ${props.theme.colors.success[500]};
    `}

	${(props) =>
        props.tagColor === 'orange' &&
        `
        color: ${props.theme.colors.warning[400]};
        background-color: ${props.theme.colors.warning[500]};
    `}
`;

export const Tag: FC<TagProps> = ({ children, tagColor }) => {
    return (
        <StyledTag tagColor={tagColor}>
            <span>{children}</span>
        </StyledTag>
    );
};
