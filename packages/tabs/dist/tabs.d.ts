import { FC, ReactNode } from 'react';
export interface TabsProps {
    defaultActive?: string;
    active?: string;
    onChange?: (id: string) => void;
    children: ReactNode;
}
export declare const Tabs: FC<TabsProps>;
//# sourceMappingURL=tabs.d.ts.map