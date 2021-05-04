import React, { FC, ReactNode, useContext } from 'react';
import styled from 'styled-components';
import TabsContext from './tabs-context';

export interface TabProps {
    id: string;
    children: ReactNode;
    className?: string | undefined;
}

const StyledTab = styled.div<TabProps>`
    min-width: 120px;
    display: block;
    cursor: pointer;
    outline: none;
    text-align: center;
    background-color: transparent;
    border-bottom: ${(props) => props.theme.spacing.space2} solid;
    border-bottom-color: ${(props) => props.theme.colors.neutral200};
    padding: ${(props) => props.theme.spacing.space8}
        ${(props) => props.theme.spacing.space12}
        ${(props) => props.theme.spacing.space6}
        ${(props) => props.theme.spacing.space12};
    color: ${(props) => props.theme.colors.neutral300};
    font-size: ${(props) => props.theme.typography.fontSize.base};
    font-weight: ${(props) => props.theme.typography.fontWeight.base};
    line-height: ${(props) => props.theme.typography.lineHeight.base};
    border-radius: ${(props) => props.theme.spacing.space8}
        ${(props) => props.theme.spacing.space8} 0 0;
    transition: 0.2s ease;

    &:hover {
        border-bottom-color: ${(props) => props.theme.colors.neutral300};
    }

    &:focus {
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary100};
    }

    &.atlantum-tab-selected {
        border-bottom-color: ${(props) => props.theme.colors.primary200};
        color: ${(props) => props.theme.colors.neutral400};
    }
`;

export const Tab: FC<TabProps> = ({ children, id }) => {
    const { active, setActive } = useContext(TabsContext);
    const isSelected = active === id;
    return (
        <StyledTab
            role="tab"
            aria-selected={isSelected}
            aria-controls={`panel-${id}`}
            id={`tab-${id}`}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => setActive && setActive(id)}
            className={isSelected ? `atlantum-tab-selected` : undefined}
        >
            {children}
        </StyledTab>
    );
};
