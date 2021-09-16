import Konva from 'konva';
import { Board } from '../../../Board';
import { ShapeDrawer } from '../../ShapeDrawer';
import { PolygonModel } from '../../models/PolygonModel';
export declare class PolygonDrawer extends ShapeDrawer<Konva.RegularPolygon, Konva.RegularPolygonConfig> {
    node: Konva.RegularPolygon;
    constructor(board: Board);
    insert(config: Konva.RegularPolygonConfig): PolygonModel;
    draw(config?: Partial<Konva.RegularPolygonConfig>): void;
    protected createShape(config: Konva.RegularPolygonConfig): PolygonModel;
    protected onStartDrawing(): void;
    protected onDrawing(e: Konva.KonvaEventObject<MouseEvent>): void;
}
