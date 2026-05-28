import { HTMLAttributes } from 'react';
import { IconVariants } from '@deliverect/galaxy-styles';
import { LoadingSpinnerStatus } from './types';
type Props = {
    status: LoadingSpinnerStatus;
} & IconVariants & HTMLAttributes<SVGElement>;
export declare const LoadingSpinnerAnimation: ({ status, size, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
