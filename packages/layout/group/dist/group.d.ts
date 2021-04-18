import { FC, ReactNode } from 'react';
export declare type RelationTypes = 'closest' | 'grouped' | 'one-context' | 'separated' | 'far';
export declare type Direction = 'row' | 'column';
export interface GroupProps {
    children: ReactNode;
    relation: RelationTypes;
    isCentered?: boolean;
    className?: string;
}
export declare const Group: FC<GroupProps>;
//# sourceMappingURL=group.d.ts.map