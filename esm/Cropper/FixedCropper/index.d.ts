import Konva from 'konva';
import { BaseCropper } from '../BaseCropper';
import { Board } from '../../Board';
import type { CropperOptions, Point } from '../../types';
export declare abstract class FixedCropper extends BaseCropper {
    readonly draggable: Konva.Rect;
    constructor(board: Board, options: Partial<CropperOptions>);
    zoom(scale: number): void;
    setDraggableOverlayPosition({ x, y }: Point): void;
    protected setupCropzone(): void;
    private getDraggableOverlayBoundRect;
    private createDraggableOverlay;
}
