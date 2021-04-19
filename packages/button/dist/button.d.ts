import { FC, ReactNode, MouseEventHandler } from 'react';
export interface ButtonProps {
    /**
     * If `true`, the button will have icon before label text.
     */
    leftIcon?: ReactNode;
    /**
     * You need to pass Icon component to make it work
     * Example: `leftIcon={<Icon name={'git-commit'} size={20} />}`
     */
    rightIcon?: ReactNode;
    /**
     * You need to pass Icon component to make it work
     * Example: `rightIcon={<Icon name={'git-commit'} size={20} />}`
     */
    isSecondary?: boolean;
    /**
     * If `true`, the button will be disabled.
     *
     */
    disabled?: boolean;
    /**
     * Mandatory field, you need to enter a button label.
     */
    children: ReactNode;
    /**
     * HTML type for button.
     */
    type?: 'button' | 'submit' | 'reset';
    /**
     * this prop are in development...
     */
    isLoading?: boolean;
    /**
     * Access to React event handler.
     */
    onClick?: MouseEventHandler;
    /**
     * Allow apply custom classes to component
     */
    className?: string;
}
export declare const StyledButton: import("styled-components").StyledComponent<"button", any, ButtonProps, never>;
export declare const Button: FC<ButtonProps>;
//# sourceMappingURL=button.d.ts.map