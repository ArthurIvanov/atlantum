import { FC } from 'react';
export interface ImageProps {
    /**
     * source link to image
     * */
    src?: string;
    /**
     * Alt text for an image
     * */
    alt?: string;
    /**
     * width of image
     * */
    width?: string;
    /**
     * height of image
     * */
    height?: string;
    /**
     * If `true` creates corner radius
     * */
    isRounded?: boolean;
    /**
     * Allow apply custom classes to component
     */
    className?: string;
}
export declare const Image: FC<ImageProps>;
//# sourceMappingURL=Image.d.ts.map