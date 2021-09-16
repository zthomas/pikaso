import Konva from 'konva';
import { ShapeModel } from '../../ShapeModel';
import type { Shapes } from '../../../types';
export declare class CircleModel extends ShapeModel<Konva.Circle, Konva.CircleConfig> {
    get type(): keyof Shapes;
}
