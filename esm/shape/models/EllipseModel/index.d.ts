import Konva from 'konva';
import { ShapeModel } from '../../ShapeModel';
import type { Shapes } from '../../../types';
export declare class EllipseModel extends ShapeModel<Konva.Ellipse, Konva.EllipseConfig> {
    get type(): keyof Shapes;
}
