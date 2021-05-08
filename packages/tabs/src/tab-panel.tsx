import React, { FC, ReactNode, useContext } from 'react';
import TabsContext from './tabs-context';
import styled from 'styled-components';

export interface TabPanelProps {
    id: string;
    children: ReactNode;
}

const StyledTabPanel = styled.div`
    padding: ${(props) => props.theme.spacing[24]};
`;

export const TabPanel: FC<TabPanelProps> = ({ children, id }) => {
    const { active } = useContext(TabsContext);
    return (
        <StyledTabPanel
            tabIndex={0}
            role="tabpanel"
            id={`panel-${id}`}
            aria-labelledby={`tab-${id}`}
            hidden={active !== id}
        >
            {children}
        </StyledTabPanel>
    );
};
