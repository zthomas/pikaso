import Konva from 'konva';
import { Board } from '../../../Board';
import { ShapeDrawer } from '../../ShapeDrawer';
import { RectModel } from '../../models/RectModel';
export declare class RectDrawer extends ShapeDrawer<Konva.Rect, Konva.RectConfig> {
    node: Konva.Rect;
    constructor(board: Board);
    insert(config: Konva.RectConfig): RectModel;
    draw(config?: Partial<Konva.RectConfig>): void;
    protected createShape(config: Konva.RectConfig): RectModel;
    protected onStartDrawing(): void;
    protected onDrawing(e: Konva.KonvaEventObject<MouseEvent>): void;
}
