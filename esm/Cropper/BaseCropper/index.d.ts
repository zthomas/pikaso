import Konva from 'konva';
import { Board } from '../../Board';
import type { CropperOptions } from '../../types';
export declare abstract class BaseCropper {
    readonly board: Board;
    readonly layer: Konva.Layer;
    readonly overlay: Konva.Shape;
    cropzone: Konva.Group;
    readonly options: CropperOptions;
    constructor(board: Board, options: Partial<CropperOptions>);
    protected getCursorEvents(): {
        name: string;
        cursor: string;
    }[];
    private createCropzone;
    private createGuideLines;
    private createOverlay;
    private createOptions;
    private getCircularCropperOptions;
    private getRectangularCropperOptions;
    protected abstract setupCropzone(): void;
    protected abstract setupOverlay(): void;
}
