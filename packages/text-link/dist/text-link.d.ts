import React, { FC, ReactNode } from 'react';
export interface TextLinkProps {
    children: ReactNode;
    onClick?: React.MouseEventHandler;
    Icon?: ReactNode;
    href?: string;
    /**
     * Allow apply custom classes to component
     */
    className?: string;
}
export declare const TextLink: FC<TextLinkProps>;
//# sourceMappingURL=text-link.d.ts.map