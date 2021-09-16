import Konva from 'konva';
import { ShapeModel } from '../../ShapeModel';
import type { Shapes } from '../../../types';
export declare class ArrowModel extends ShapeModel<Konva.Arrow, Konva.ArrowConfig> {
    get type(): keyof Shapes;
}
