import React, {
    FC,
    ReactNode,
    useState,
    Children,
    useRef,
    useLayoutEffect,
} from 'react';
import TabsContext from './tabs-context';

export interface TabsProps {
    defaultActive?: string;
    active?: string;
    onChange?: (id: string) => void;
    children: ReactNode;
}

export const Tabs: FC<TabsProps> = ({
    defaultActive,
    active: activeTab,
    onChange: onChangeHandler,
    children,
}) => {
    const tabs = useRef<React.ReactNode[]>([]);
    const [active, setActive] = useState<string | undefined>(
        activeTab || defaultActive
    );

    useLayoutEffect(() => {
        tabs.current = Children.toArray(children).filter((child) => {
            return (
                //@ts-ignore
                React.isValidElement(child) && child.type.name === 'TabPanel'
            );
        }) as React.ReactElement[];
    }, [children]);

    const onChange = (id: string) => {
        onChangeHandler && onChangeHandler(id);

        if (!activeTab) {
            setActive(id);
        }
    };

    return (
        <TabsContext.Provider
            value={{
                active,
                setActive: onChange,
            }}
        >
            {children}
        </TabsContext.Provider>
    );
};
