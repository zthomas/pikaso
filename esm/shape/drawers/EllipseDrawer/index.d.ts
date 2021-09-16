import Konva from 'konva';
import { Board } from '../../../Board';
import { ShapeDrawer } from '../../ShapeDrawer';
import { EllipseModel } from '../../models/EllipseModel';
export declare class EllipseDrawer extends ShapeDrawer<Konva.Ellipse, Konva.EllipseConfig> {
    node: Konva.Ellipse;
    constructor(board: Board);
    insert(config: Konva.EllipseConfig): EllipseModel;
    draw(config?: Partial<Konva.EllipseConfig>): void;
    protected createShape(config: Konva.EllipseConfig): EllipseModel;
    protected onStartDrawing(): void;
    protected onDrawing(e: Konva.KonvaEventObject<MouseEvent>): void;
}
