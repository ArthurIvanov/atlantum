import React, { FC, ReactNode } from 'react';
export interface BadgeProps {
    children: ReactNode;
    onClick?: React.MouseEventHandler;
    isInfo?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
    isDanger?: boolean;
}
export declare const StyledBadge: import("styled-components").StyledComponent<"div", any, BadgeProps, never>;
export declare const Badge: FC<BadgeProps>;
//# sourceMappingURL=badge.d.ts.map