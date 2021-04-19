import { FC, ReactNode } from 'react';
import { InputProps } from '../../text-input';
export interface SelectProps extends InputProps {
    checked?: boolean;
    children: ReactNode;
    placeholder?: string;
    /**
     * Allow apply custom classes to component
     */
    className?: string;
}
export declare const Select: FC<SelectProps>;
//# sourceMappingURL=select.d.ts.map