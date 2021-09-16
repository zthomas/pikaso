import Konva from 'konva';
import { ShapeModel } from '../../ShapeModel';
import type { Shapes } from '../../../types';
export declare class PolygonModel extends ShapeModel<Konva.RegularPolygon, Konva.RegularPolygonConfig> {
    get type(): keyof Shapes;
}
