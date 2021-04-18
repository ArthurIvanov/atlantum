import React, { FC, ReactNode } from 'react';
export interface NavigationLinkProps {
    children: ReactNode;
    onClick?: React.MouseEventHandler;
    as?: string;
    href?: string;
    /**
     * Allow apply custom classes to component
     */
    className?: string;
}
export declare const NavigationLink: FC<NavigationLinkProps>;
//# sourceMappingURL=navigation-link.d.ts.map