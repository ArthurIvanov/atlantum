import { FC, ChangeEventHandler } from 'react';
import InputTypes from '@atlantum/types';
export interface InputProps {
    disabled?: boolean;
    danger?: boolean;
    success?: boolean;
    loading?: boolean;
    placeholder?: string;
    name: string;
    type: InputTypes;
    value?: string;
    label?: string;
    alert?: string;
    defaultValue?: string;
    id?: string;
    input?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * Allow apply custom classes to component
     */
    className?: string;
}
export declare const TextInput: FC<InputProps>;
//# sourceMappingURL=text-Input.d.ts.map