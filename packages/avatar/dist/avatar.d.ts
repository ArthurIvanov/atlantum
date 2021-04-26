import { FC, ReactNode } from 'react';
declare type AvatarSize = 'default' | 'large';
export interface AvatarProps {
    /**
     * Initials which are passed to `Avatar`
     * if no Initials provided it will fallback to standard icon
     */
    children?: ReactNode;
    /**
     * The size of the `Avatar`
     */
    size?: AvatarSize;
    /**
     * The image url of the `Avatar`
     * * if no image url are provided it will fallback to standard icon
     */
    src?: string;
}
export declare const Avatar: FC<AvatarProps>;
export {};
//# sourceMappingURL=avatar.d.ts.map