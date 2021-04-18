import { FC, ReactNode } from 'react';
export declare type BannerSizes = 'regular' | 'large' | 'hero';
export interface ProductBannerProps {
    children: ReactNode;
    backgroundImage: string;
    size?: BannerSizes;
    /**
     * Allow apply custom classes to component
     */
    className?: string;
}
export declare const ProductBanner: FC<ProductBannerProps>;
//# sourceMappingURL=product-banner.d.ts.map