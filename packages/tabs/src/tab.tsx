import React, { FC, ReactNode, useContext } from 'react';
import styled from 'styled-components';
import TabsContext from './tabs-context';

export interface TabProps {
    id: string;
    children: ReactNode;
}

const StyledTab = styled.div<TabProps>`
    display: block;
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 1rem;
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
        >
            {children}
        </StyledTab>
    );
};
