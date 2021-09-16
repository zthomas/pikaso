import Konva from 'konva';
import { Board } from '../../../Board';
import { ShapeDrawer } from '../../ShapeDrawer';
import { ArrowModel } from '../../models/ArrowModel';
export declare class ArrowDrawer extends ShapeDrawer<Konva.Arrow, Konva.ArrowConfig> {
    node: Konva.Arrow;
    constructor(board: Board);
    insert(config: Konva.ArrowConfig): ArrowModel;
    draw(config?: Partial<Konva.ArrowConfig>): void;
    protected createShape(config: Konva.ArrowConfig): ArrowModel;
    protected onStartDrawing(): void;
    protected onDrawing(e: Konva.KonvaEventObject<MouseEvent>): void;
}
