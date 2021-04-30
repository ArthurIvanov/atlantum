import React, { FC, ReactNode, useContext } from 'react';
import TabsContext from './tabs-context';

export interface TabPanelProps {
    id: string;
    children: ReactNode;
}

export const TabPanel: FC<TabPanelProps> = ({ children, id }) => {
    const { active } = useContext(TabsContext);
    console.log(id);
    return (
        <div
            tabIndex={0}
            role="tabpanel"
            id={`panel-${id}`}
            aria-labelledby={`tab-${id}`}
            hidden={active !== id}
        >
            <div>{children}</div>
        </div>
    );
};
