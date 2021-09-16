import { FixedCropper } from '../FixedCropper';
import { Board } from '../../Board';
import type { CircularCropperOptions, Point, Dimensions } from '../../types';
export declare class FixedCircularCropper extends FixedCropper {
    constructor(board: Board, options: Partial<CircularCropperOptions>);
    getRect(): (Point & Dimensions) | null;
    protected setupOverlay(): void;
}
