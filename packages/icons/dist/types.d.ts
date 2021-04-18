import { MouseEventHandler } from 'react';
import SvgData from './set';
export declare type IconName = keyof typeof SvgData;
export interface IconProps {
    color?: string;
    size?: string | number;
    strokeWidth?: string | number;
    className?: string;
    onClick?: MouseEventHandler;
}
export interface IconComponentProps extends IconProps {
    readonly name: IconName;
}
//# sourceMappingURL=types.d.ts.map