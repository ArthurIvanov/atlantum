import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

type TagColor = 'neutral' | 'red' | 'blue' | 'green' | 'orange';

export interface TagProps {
    children: ReactNode;
    tagColor?: TagColor;
}

const StyledTag = styled.div<TagProps>`
    padding: ${(props) => props.theme.spacing.space4}
        ${(props) => props.theme.spacing.space8};
    border-radius: 32px;
    font-size: ${(props) => props.theme.typography.fontSize.subLabel};
    font-weight: ${(props) => props.theme.typography.fontWeight.semiBold};
    line-height: ${(props) => props.theme.typography.lineHeight.subLabel};

    ${(props) =>
        props.tagColor === 'neutral' &&
        `
        color: ${props.theme.colors.neutral400};
        background-color: ${props.theme.colors.neutralGlobalBG};
    `}

    ${(props) =>
        props.tagColor === 'red' &&
        `
        color: ${props.theme.colors.danger300};
        background-color: ${props.theme.colors.dangerBG};
    `}

	${(props) =>
        props.tagColor === 'blue' &&
        `
        color: ${props.theme.colors.info300};
        background-color: ${props.theme.colors.infoBG};
    `}

	${(props) =>
        props.tagColor === 'green' &&
        `
        color: ${props.theme.colors.success300};
        background-color: ${props.theme.colors.successBG};
    `}

	${(props) =>
        props.tagColor === 'orange' &&
        `
        color: ${props.theme.colors.warning300};
        background-color: ${props.theme.colors.warningBG};
    `}
`;

export const Tag: FC<TagProps> = ({ children, tagColor }) => {
    return (
        <StyledTag tagColor={tagColor}>
            <span>{children}</span>
        </StyledTag>
    );
};
