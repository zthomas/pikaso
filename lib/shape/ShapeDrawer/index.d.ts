import Konva from 'konva';
import { Board } from '../../Board';
import { ShapeModel } from '../../shape/ShapeModel';
import { IShape, IDrawableShape, DrawType, Point } from '../../types';
export declare abstract class ShapeDrawer<T extends Konva.Shape, P extends Konva.ShapeConfig> implements IShape, IDrawableShape {
    config: Partial<P>;
    startPoint: Point;
    protected readonly board: Board;
    private drawType;
    abstract node: T | null;
    constructor(board: Board, drawType: DrawType);
    get isDrawing(): boolean;
    insert(config: Konva.ShapeConfig): ShapeModel<T>;
    draw(config: Partial<P>): void;
    stopDrawing(): void;
    getShapePosition(): {
        x: number;
        y: number;
    };
    protected onStartDrawing(): void;
    protected onDrawing(e: Konva.KonvaEventObject<MouseEvent>): void;
    protected onFinishDrawing(): void;
    private onKeyDown;
    protected abstract createShape(config: Partial<Konva.ShapeConfig>): ShapeModel<T>;
}
