import Konva from 'konva';
import { Board } from '../../../Board';
import { ShapeDrawer } from '../../ShapeDrawer';
import { CircleModel } from '../../models/CircleModel';
export declare class CircleDrawer extends ShapeDrawer<Konva.Circle, Konva.CircleConfig> {
    node: Konva.Circle;
    constructor(board: Board);
    insert(config: Konva.CircleConfig): CircleModel;
    draw(config?: Partial<Konva.CircleConfig>): void;
    protected createShape(config: Konva.CircleConfig): CircleModel;
    protected onStartDrawing(): void;
    protected onDrawing(e: Konva.KonvaEventObject<MouseEvent>): void;
}
