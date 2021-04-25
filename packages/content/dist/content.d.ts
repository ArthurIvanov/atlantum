import { FC, ReactNode } from 'react';
export declare type ContentWidth = 'fluid' | 'fixed';
export interface ContentProps {
    children: ReactNode;
    /**
     * Define width of the content inside card.
     * If passed fixed, then max-width of content will be 1032px.
     * If passed fluid, then content will occupy 100% of entire card.
     * */
    contentWidth: ContentWidth;
}
export declare const Content: FC<ContentProps>;
//# sourceMappingURL=content.d.ts.map