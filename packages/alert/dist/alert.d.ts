import { FC, ReactNode } from 'react';
declare type Status = 'info' | 'success' | 'warning' | 'danger';
export interface AlertProps {
    children?: ReactNode;
    alertStatus?: Status;
    alertTitle?: string;
    isClosable?: boolean;
    /**
     * Allow apply custom classes to component
     */
    className?: string;
}
export declare const Alert: FC<AlertProps>;
export declare const AlertIcon: FC<AlertProps>;
export declare const CloseIcon: FC<AlertProps>;
export declare const AlertTitle: FC<AlertProps>;
export {};
//# sourceMappingURL=alert.d.ts.map