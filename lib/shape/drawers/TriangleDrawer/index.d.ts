import Konva from 'konva';
import { Board } from '../../../Board';
import { ShapeDrawer } from '../../ShapeDrawer';
import { TriangleConfig } from '../../../types';
import { TriangleModel } from '../../models/TriangleModel';
export declare class TriangleDrawer extends ShapeDrawer<Konva.RegularPolygon, TriangleConfig> {
    node: Konva.RegularPolygon;
    constructor(board: Board);
    insert(config: TriangleConfig): TriangleModel;
    draw(config?: Partial<TriangleConfig>): void;
    protected createShape(config: TriangleConfig): TriangleModel;
    protected onStartDrawing(): void;
    protected onDrawing(e: Konva.KonvaEventObject<MouseEvent>): void;
}
