import { FC } from 'react';
import { InputProps } from '@atlantum/text-input';
export interface CheckboxProps extends InputProps {
    /**
     * if `true` change checkbox on check
     * */
    checked?: boolean;
    /**
     * Allow to add classes to component
     * */
    className?: string;
}
export declare const Checkbox: FC<CheckboxProps>;
//# sourceMappingURL=checkbox.d.ts.map