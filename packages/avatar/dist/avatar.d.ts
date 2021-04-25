import { FC, ReactNode } from 'react';
declare type AvatarSize = 'default' | 'large';
export interface AvatarProps {
    children?: ReactNode;
    size?: AvatarSize;
    /**
     * The image url of the `Avatar`
     */
    src?: string;
}
export declare const Avatar: FC<AvatarProps>;
export {};
//# sourceMappingURL=avatar.d.ts.map