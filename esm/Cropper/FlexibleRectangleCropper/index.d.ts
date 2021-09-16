import { Board } from '../../Board';
import { FlexibleCropper } from '../FlexibleCropper';
import type { RectangleCropperOptions } from '../../types';
export declare class FlexibleRectangleCropper extends FlexibleCropper {
    constructor(board: Board, options: Partial<RectangleCropperOptions>);
    protected setupOverlay(): void;
}
