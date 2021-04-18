import { FC, ReactNode } from 'react';
export declare type TextSize = 'label' | 'subLabel';
export declare type TextTags = 'p' | 'i' | 'u' | 'abbr' | 'cite' | 'del' | 'em' | 'ins' | 'kbd' | 'mark' | 's' | 'samp' | 'span' | 'small' | 'strong' | 'sub' | 'sup';
export interface TextProps {
    children?: ReactNode;
    /**
     *  Choose which html markup text should be
     * */
    as?: TextTags;
    /**
     *  Change size from base `16px`
     *  to label `14px`
     *  or sublabel `12px`
     * */
    size?: TextSize;
    /**
     *  If `true` text-align:center rule are applied
     * */
    centered?: boolean;
    /**
     * Allow apply custom classes to component
     */
    className?: string;
}
export declare const Text: FC<TextProps>;
//# sourceMappingURL=text.d.ts.map