import Konva from 'konva';
import { Board } from '../../../Board';
import { ShapeDrawer } from '../../ShapeDrawer';
import { LineModel } from '../../models/LineModel';
export declare class LineDrawer extends ShapeDrawer<Konva.Line, Konva.LineConfig> {
    node: Konva.Line;
    constructor(board: Board);
    insert(config: Konva.LineConfig): LineModel;
    draw(config?: Partial<Konva.LineConfig>): void;
    protected createShape(config: Konva.LineConfig): LineModel;
    protected onStartDrawing(): void;
    protected onDrawing(e: Konva.KonvaEventObject<MouseEvent>): void;
}
