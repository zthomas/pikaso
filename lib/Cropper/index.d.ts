import { Board } from '../Board';
import { FixedCircularCropper } from './FixedCircularCropper';
import { FixedRectangleCropper } from './FixedRectangleCropper';
import { FlexibleCircularCropper } from './FlexibleCircularCropper';
import { FlexibleRectangleCropper } from './FlexibleRectangleCropper';
import type { CropOptions, CropperOptions, Dimensions, Point } from '../types';
export declare class Cropper {
    private readonly board;
    private instance;
    private active;
    constructor(board: Board);
    get isActive(): boolean;
    getInstance(): FixedCircularCropper | FixedRectangleCropper | FlexibleCircularCropper | FlexibleRectangleCropper;
    start(options: Partial<CropperOptions>): void;
    stop(): void;
    zoom(value: number): false | undefined;
    setPosition(point: Point): void;
    getRect(): (Point & Dimensions) | null;
    crop(options?: Partial<CropOptions>): Promise<(Point & Dimensions) | null>;
}
