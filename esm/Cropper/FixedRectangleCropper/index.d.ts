import { FixedCropper } from '../FixedCropper';
import { Board } from '../../Board';
import type { Point, Dimensions, RectangleCropperOptions } from '../../types';
export declare class FixedRectangleCropper extends FixedCropper {
    constructor(board: Board, options: Partial<RectangleCropperOptions>);
    getRect(): (Point & Dimensions) | null;
    protected setupOverlay(): void;
}
