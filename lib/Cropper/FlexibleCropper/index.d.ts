import Konva from 'konva';
import { BaseCropper } from '../BaseCropper';
import { Board } from '../../Board';
import type { CropperOptions, Point, Dimensions } from '../../types';
export declare abstract class FlexibleCropper extends BaseCropper {
    protected readonly transformer: Konva.Transformer;
    constructor(board: Board, options: Partial<CropperOptions>);
    setPosition({ x, y }?: Point): void;
    getRect(): (Point & Dimensions) | null;
    protected setupCropzone(): void;
    private getCropzoneBoundRect;
    private createTransformer;
}
