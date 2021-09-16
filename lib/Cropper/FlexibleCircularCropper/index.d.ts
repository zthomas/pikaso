import { Board } from '../../Board';
import { FlexibleCropper } from '../FlexibleCropper';
import type { CircularCropperOptions } from '../../types';
export declare class FlexibleCircularCropper extends FlexibleCropper {
    constructor(board: Board, options: Partial<CircularCropperOptions>);
    protected setupOverlay(): void;
}
