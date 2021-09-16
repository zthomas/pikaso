import Konva from 'konva';
import { ShapeModel } from '../../ShapeModel';
import type { Shapes, TriangleConfig } from '../../../types';
export declare class TriangleModel extends ShapeModel<Konva.RegularPolygon, TriangleConfig> {
    get type(): keyof Shapes;
}
