import { FC, ReactNode } from 'react';
declare type TagColor = 'neutral' | 'red' | 'blue' | 'green' | 'orange';
export interface TagProps {
    children: ReactNode;
    tagColor?: TagColor;
}
export declare const Tag: FC<TagProps>;
export {};
//# sourceMappingURL=tag.d.ts.map